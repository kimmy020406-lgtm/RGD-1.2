'use strict';

const { getDatabase } = require('../lib/mongodb');

module.exports = async function leaderboardHandler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  try {
    const db = await getDatabase();
    const rows = await db.collection('scores')
      .find({}, {
        projection: {
          _id: 0,
          playerName: 1,
          score: 1,
          correctAnswers: 1,
          totalQuestions: 1,
          missionId: 1,
          createdAt: 1
        }
      })
      .sort({ score: -1, correctAnswers: -1, createdAt: 1 })
      .limit(10)
      .toArray();

    return res.status(200).json({ ok: true, leaderboard: rows });
  } catch (error) {
    console.error('GET /api/leaderboard failed:', error.message);
    return res.status(500).json({ ok: false, error: 'Unable to load leaderboard.' });
  }
};
