// import { NextRequest } from "next/server";
// import { pool } from "@/lib/db";

// export const dynamic = "force-dynamic";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const id = Number(params.id);

//   const result = await pool.query(
//     "SELECT * FROM vortrag WHERE id = $1",
//     [id]
//   );

//   return Response.json(result.rows[0]);
// }
