'use strict';

const { getDb } = require('../lib/mongodb');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const db = await getDb();
    const scores = await db.collection('scores')
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

    const leaderboard = scores.map((item) => ({
      playerName: item.playerName,
      score: item.score,
      correctAnswers: item.correctAnswers,
      totalQuestions: item.totalQuestions,
      mission: item.mission,
      createdAt: item.createdAt instanceof Date ? item.createdAt.toISOString() : null
    }));

    return res.status(200).json({ ok: true, leaderboard });
  } catch (error) {
    console.error('Leaderboard API failed:', error && error.message ? error.message : error);
    return res.status(500).json({
      ok: false,
      error: 'Could not load leaderboard. Check Vercel logs and MongoDB settings.'
    });
  }
};
