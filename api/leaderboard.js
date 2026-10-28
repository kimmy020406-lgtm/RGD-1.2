
import { getDb } from '../lib/mongodb.js';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers
  });
}

export async function GET() {
  try {
    const db = await getDb();

    const documents = await db.collection('scores')
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
      .sort({
        score: -1,
        correctAnswers: -1,
        createdAt: 1
      })
      .limit(10)
      .toArray();

    const leaderboard = documents.map((entry) => ({
      playerName:
        typeof entry.playerName === 'string'
          ? entry.playerName
          : 'Player',

      score: Number.isFinite(Number(entry.score))
        ? Number(entry.score)
        : 0,

      correctAnswers:
        Number.isFinite(Number(entry.correctAnswers))
          ? Number(entry.correctAnswers)
          : 0,

      totalQuestions:
        Number.isFinite(Number(entry.totalQuestions))
          ? Number(entry.totalQuestions)
          : 5,

      mission:
        Number.isInteger(Number(entry.mission))
          ? Number(entry.mission)
          : 0,

      createdAt:
        entry.createdAt instanceof Date
          ? entry.createdAt.toISOString()
          : null
    }));

    return json({
      ok: true,
      leaderboard
    });
  } catch (error) {
    console.error(
      'Leaderboard API failed:',
      error?.message || error
    );

    return json({
      ok: false,
      error: 'Could not load leaderboard. Check Vercel function logs and MongoDB settings.'
    }, 500);
  }
}
