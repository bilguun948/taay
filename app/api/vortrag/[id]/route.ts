import { pool } from "@/lib/db";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const result = await pool.query("SELECT * FROM vortrag WHERE id = $1", [id]);
  return Response.json(result.rows[0]);
}
