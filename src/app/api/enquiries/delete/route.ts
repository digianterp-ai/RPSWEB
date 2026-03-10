import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const { id } = await req.json();

  await prisma.contactEnquiry.delete({
    where: { id }
  });

  return Response.json({
    success: true
  });

}