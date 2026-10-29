import { getDb, diagnoseMongoError } from '../lib/mongodb.js';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers });
}

export async function GET() {
  try {
    const db = await getDb();
    const rows = await db.collection('scores')
      .find({}, {
        projection: {
          _id: 0,
          playerName: 1,
          score: 1,
          correctAnswers: 1,
          totalQuestions: 1,
          mission: 1,
          createdAt: 1
        }
      })
      .sort({ score: -1, correctAnswers: -1, createdAt: 1 })
      .limit(10)
      .toArray();

    const leaderboard = rows.map((row) => ({
      playerName: typeof row.playerName === 'string' ? row.playerName : 'Player',
      score: Number.isFinite(Number(row.score)) ? Number(row.score) : 0,
      correctAnswers: Number.isFinite(Number(row.correctAnswers)) ? Number(row.correctAnswers) : 0,
      totalQuestions: Number.isFinite(Number(row.totalQuestions)) ? Number(row.totalQuestions) : 5,
      mission: Number.isInteger(Number(row.mission)) ? Number(row.mission) : 0,
      createdAt: row.createdAt instanceof Date ? row.createdAt.toISOString() : null
    }));

    return json({ ok: true, leaderboard });
  } catch (error) {
    const diagnosis = diagnoseMongoError(error);
    console.error('[api/leaderboard]', diagnosis.code, error?.name || 'Error', error?.code || '');
    return json({ ok: false, code: diagnosis.code, error: diagnosis.message }, 500);
  }
}
