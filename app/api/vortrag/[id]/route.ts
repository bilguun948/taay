import { NextRequest } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  const result = await pool.query(
    "SELECT * FROM vortrag WHERE id = $1",
    [id]
  );

  return Response.json(result.rows[0]);
}
