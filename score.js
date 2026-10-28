'use strict';

const { getDb } = require('../lib/mongodb');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const playerName = typeof body.playerName === 'string' ? body.playerName.trim().replace(/\s+/g, ' ').slice(0, 30) : '';
  const score = Number(body.score);
  const correctAnswers = Number(body.correctAnswers);
  const totalQuestions = Number(body.totalQuestions);
  const mission = Number(body.mission);

  if (!playerName) {
    return res.status(400).json({ ok: false, error: 'A player name is required.' });
  }
  if (!Number.isInteger(score) || score < 0 || score > 50 || score % 10 !== 0) {
    return res.status(400).json({ ok: false, error: 'Score must be a multiple of 10 between 0 and 50.' });
  }
  if (!Number.isInteger(correctAnswers) || correctAnswers < 0 || correctAnswers > 5) {
    return res.status(400).json({ ok: false, error: 'correctAnswers must be between 0 and 5.' });
  }
  if (totalQuestions !== 5 || score !== correctAnswers * 10) {
    return res.status(400).json({ ok: false, error: 'Score data is inconsistent.' });
  }
  if (!Number.isInteger(mission) || mission < 0 || mission > 2) {
    return res.status(400).json({ ok: false, error: 'Mission must be 0, 1, or 2.' });
  }

  try {
    const db = await getDb();
    const entry = {
      playerName,
      score,
      correctAnswers,
      totalQuestions,
      mission,
      createdAt: new Date()
    };
    const inserted = await db.collection('scores').insertOne(entry);
    return res.status(201).json({ ok: true, id: String(inserted.insertedId) });
  } catch (error) {
    console.error('Score API failed:', error && error.message ? error.message : error);
    return res.status(500).json({
      ok: false,
      error: 'Could not save score. Check Vercel logs and MongoDB settings.'
    });
  }
};
