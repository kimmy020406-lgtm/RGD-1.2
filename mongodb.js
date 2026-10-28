'use strict';

const { MongoClient } = require('mongodb');

/**
 * Reuse one MongoClient connection pool across Vercel Function invocations.
 * Set MONGODB_URI in Vercel Project Settings > Environment Variables.
 */
async function getDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not configured. Add it in Vercel Environment Variables.');
  }

  if (!globalThis.__rgdMongoClientPromise) {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 8000,
      appName: 'GrafikDigitalQuest'
    });
    globalThis.__rgdMongoClientPromise = client.connect().catch((error) => {
      globalThis.__rgdMongoClientPromise = null;
      throw error;
    });
  }

  const client = await globalThis.__rgdMongoClientPromise;
  const dbName = process.env.MONGODB_DB || 'grafik_digital_quest';
  return client.db(dbName);
}

module.exports = { getDatabase };
