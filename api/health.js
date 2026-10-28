
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
    await db.command({ ping: 1 });

    return json({
      ok: true,
      databaseConnected: true,
      database:
        process.env.MONGODB_DB || 'grafik_digital_quest'
    });
  } catch (error) {
    console.error(
      'Health check failed:',
      error?.message || error
    );

    return json({
      ok: false,
      databaseConnected: false,
      error: 'MongoDB connection failed. Check Vercel environment variables, Atlas Network Access, and function logs.'
    }, 500);
  }
}
