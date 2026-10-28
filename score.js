'use strict';

const { getDatabase } = require('../lib/mongodb');

module.exports = async function scoreHandler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ ok: false, error: 'A valid JSON request body is required.' });
  }

  const playerName = typeof body.playerName === 'string'
    ? body.playerName.replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 30)
    : '';
  const { score, correctAnswers, totalQuestions, missionId, language } = body;

  // Each mission has 5 questions, and each correct answer is worth 10 points.
  const valid = playerName.length > 0
    && Number.isInteger(score) && score >= 0 && score <= 50
    && Number.isInteger(correctAnswers) && correctAnswers >= 0 && correctAnswers <= 5
    && totalQuestions === 5
    && score === correctAnswers * 10
    && Number.isInteger(missionId) && missionId >= 0 && missionId <= 2
    && (language === 'ms' || language === 'en');

  if (!valid) {
    return res.status(400).json({ ok: false, error: 'Invalid score data.' });
  }

  try {
    const db = await getDatabase();
    const entry = {
      playerName,
      score,
      correctAnswers,
      totalQuestions,
      missionId,
      language,
      createdAt: new Date()
    };

    const result = await db.collection('scores').insertOne(entry);
    return res.status(201).json({
      ok: true,
      scoreId: result.insertedId.toString(),
      message: 'Score saved.'
    });
  } catch (error) {
    console.error('POST /api/score failed:', error.message);
    return res.status(500).json({ ok: false, error: 'Unable to save score.' });
  }
};
