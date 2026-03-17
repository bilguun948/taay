import { prisma } from "@/lib/prisma"
// import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const body = await req.json()

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 })
  }

//   const isValid = await bcrypt.compare(body.password, user.password)
  const isValid = await body.password


  if (!isValid) {
    return Response.json({ error: "Wrong password" }, { status: 401 })
  }

  return Response.json({ message: "Login success", user })
}