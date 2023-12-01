import { query } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const results = await query('SELECT * FROM users');
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}