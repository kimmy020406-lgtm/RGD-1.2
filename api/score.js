import { getDb, diagnoseMongoError } from '../lib/mongodb.js';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, code: 'INVALID_JSON', error: 'Request body must be valid JSON.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ ok: false, code: 'INVALID_BODY', error: 'Request body must be a JSON object.' }, 400);
  }

  const playerName = typeof body.playerName === 'string'
    ? body.playerName.trim().replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').slice(0, 30)
    : '';
  const score = body.score;
  const correctAnswers = body.correctAnswers;
  const totalQuestions = body.totalQuestions;
  const mission = body.mission;

  if (!playerName) {
    return json({ ok: false, code: 'PLAYER_NAME_REQUIRED', error: 'A player name is required.' }, 400);
  }
  if (!Number.isInteger(score) || score < 0 || score > 50 || score % 10 !== 0) {
    return json({ ok: false, code: 'INVALID_SCORE', error: 'Score must be a multiple of 10 between 0 and 50.' }, 400);
  }
  if (!Number.isInteger(correctAnswers) || correctAnswers < 0 || correctAnswers > 5) {
    return json({ ok: false, code: 'INVALID_CORRECT_COUNT', error: 'correctAnswers must be between 0 and 5.' }, 400);
  }
  if (totalQuestions !== 5 || score !== correctAnswers * 10) {
    return json({ ok: false, code: 'INCONSISTENT_SCORE', error: 'Score data is inconsistent.' }, 400);
  }
  if (!Number.isInteger(mission) || mission < 0 || mission > 2) {
    return json({ ok: false, code: 'INVALID_MISSION', error: 'Mission must be 0, 1, or 2.' }, 400);
  }

  try {
    const db = await getDb();
    const result = await db.collection('scores').insertOne({
      playerName,
      score,
      correctAnswers,
      totalQuestions,
      mission,
      createdAt: new Date()
    });

    return json({ ok: true, id: String(result.insertedId) }, 201);
  } catch (error) {
    const diagnosis = diagnoseMongoError(error);
    console.error('[api/score]', diagnosis.code, error?.name || 'Error', error?.code || '');
    return json({ ok: false, code: diagnosis.code, error: diagnosis.message }, 500);
  }
}
