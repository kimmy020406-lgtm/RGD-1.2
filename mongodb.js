'use strict';

const { MongoClient } = require('mongodb');

let cachedClientPromise = global.__rgdMongoClientPromise;

async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (!cachedClientPromise) {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 5
    });
    cachedClientPromise = client.connect();
    global.__rgdMongoClientPromise = cachedClientPromise;
  }

  const client = await cachedClientPromise;
  const dbName = process.env.MONGODB_DB || 'grafik_digital_quest';
  return client.db(dbName);
}

module.exports = { getDb };
