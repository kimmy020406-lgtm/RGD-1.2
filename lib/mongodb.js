import { MongoClient } from 'mongodb';

const CLIENT_KEY = Symbol.for('grafik-digital-quest.mongodb-client-promise');

function configError(code, message) {
  const error = new Error(message);
  error.publicCode = code;
  return error;
}

/** Return a safe, user-visible diagnosis without exposing credentials or the URI. */
export function diagnoseMongoError(error) {
  const message = String(error?.message || error || '').toLowerCase();
  const name = String(error?.name || 'Error');
  const code = error?.code;
  const codeName = String(error?.codeName || '');

  if (error?.publicCode) {
    return { code: error.publicCode, message: error.message };
  }
  if (code === 18 || codeName === 'AuthenticationFailed' || /authentication failed|bad auth|unable to authenticate/.test(message)) {
    return {
      code: 'MONGODB_AUTH_FAILED',
      message: 'MongoDB authentication failed. Check the database username and password in MONGODB_URI.'
    };
  }
  if (code === 13 || codeName === 'Unauthorized' || /not authorized on|unauthorized|insufficient privileges/.test(message)) {
    return {
      code: 'MONGODB_PERMISSION_DENIED',
      message: 'The database user does not have read/write permission for the configured database.'
    };
  }
  if (/querysrv|enotfound|eai_again|dns name|srv record/.test(message)) {
    return {
      code: 'MONGODB_DNS_ERROR',
      message: 'Could not resolve the MongoDB Atlas hostname. Check that MONGODB_URI was copied completely from Atlas.'
    };
  }
  if (/ip that isn't whitelisted|not allowed to connect|ip access list|network access/.test(message)) {
    return {
      code: 'ATLAS_IP_NOT_ALLOWED',
      message: 'MongoDB Atlas rejected this server network connection. Check Atlas Network Access for the Vercel deployment.'
    };
  }
  if (/server selection timed out|etimedout|econnrefused|enetunreach|ehostunreach|connection timed out|timed out after/.test(message)) {
    return {
      code: 'ATLAS_NETWORK_OR_TIMEOUT',
      message: 'Vercel could not reach the Atlas cluster before the connection timed out. Check Atlas Network Access and cluster status.'
    };
  }
  if (/uri malformed|invalid connection string|invalid scheme|must begin with/.test(message) || name === 'MongoParseError') {
    return {
      code: 'MONGODB_URI_INVALID',
      message: 'MONGODB_URI is not a valid MongoDB connection string. Copy the full string from Atlas and check URL-encoding of special password characters.'
    };
  }
  if (/MONGODB_URI is missing/i.test(String(error?.message || ''))) {
    return { code: 'MONGODB_URI_MISSING', message: 'MONGODB_URI is missing from this Vercel deployment environment.' };
  }
  return {
    code: 'MONGODB_CONNECTION_FAILED',
    message: 'MongoDB connection failed. Check MONGODB_URI, the Atlas cluster state, Network Access, and Vercel Function Logs.'
  };
}

function getMongoClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri || typeof uri !== 'string' || !uri.trim()) {
    throw configError('MONGODB_URI_MISSING', 'MONGODB_URI is missing from the Vercel environment.');
  }
  if (uri.includes('<db_password>') || uri.includes('<username>') || uri.includes('<password>')) {
    throw configError('MONGODB_URI_PLACEHOLDER', 'MONGODB_URI still contains a placeholder.');
  }
  if (!/^mongodb(?:\+srv)?:\/\//i.test(uri.trim())) {
    throw configError('MONGODB_URI_INVALID', 'MONGODB_URI must start with mongodb:// or mongodb+srv://.');
  }

  if (!globalThis[CLIENT_KEY]) {
    const client = new MongoClient(uri.trim(), {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      maxPoolSize: 5,
      minPoolSize: 0,
      maxIdleTimeMS: 60000
    });

    globalThis[CLIENT_KEY] = client.connect().catch(async (error) => {
      delete globalThis[CLIENT_KEY];
      try { await client.close(); } catch { /* Ignore cleanup errors. */ }
      throw error;
    });
  }

  return globalThis[CLIENT_KEY];
}

export async function getDb() {
  const dbName = (process.env.MONGODB_DB || 'grafik_digital_quest').trim();
  if (!dbName) {
    throw configError('MONGODB_DB_MISSING', 'MONGODB_DB must not be empty.');
  }
  const client = await getMongoClientPromise();
  return client.db(dbName);
}
