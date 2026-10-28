
const { getDb } = require('../lib/mongodb');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed'
    });
  }

  try {
    const db = await getDb();

    const leaderboard = await db.collection('scores')
      .find({})
      .sort({ score: -1, correctAnswers: -1, createdAt: 1 })
      .limit(10)
      .project({
        _id: 0,
        playerName: 1,
        score: 1,
        correctAnswers: 1,
        totalQuestions: 1,
        mission: 1,
        createdAt: 1
      })
      .toArray();

    return res.status(200).json({
      ok: true,
      leaderboard
    });
  } catch (error) {
    console.error('Leaderboard error:', error.message);

    return res.status(500).json({
      ok: false,
      error: 'Database connection failed'
    });
  }
};
