
import { MongoClient } from 'mongodb';

const CACHE_KEY = '__grafikDigitalQuestMongoClientPromise';

async function getClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri || typeof uri !== 'string') {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (
    uri.includes('<db_password>') ||
    uri.includes('<username>')
  ) {
    throw new Error('MONGODB_URI still contains placeholders');
  }

  if (!globalThis[CACHE_KEY]) {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      maxPoolSize: 5
    });

    globalThis[CACHE_KEY] = client.connect().catch(async (error) => {
      delete globalThis[CACHE_KEY];

      try {
        await client.close();
      } catch {
        // Abaikan ralat semasa menutup sambungan yang gagal.
      }

      throw error;
    });
  }

  return globalThis[CACHE_KEY];
}

export async function getDb() {
  const dbName = (
    process.env.MONGODB_DB || 'grafik_digital_quest'
  ).trim();

  if (!dbName) {
    throw new Error('MONGODB_DB must not be empty');
  }

  const client = await getClient();
  return client.db(dbName);
}
