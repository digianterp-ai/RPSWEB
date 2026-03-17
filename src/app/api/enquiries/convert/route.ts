import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { enquiryId } = await req.json();

  const enquiry = await prisma.contactEnquiry.findUnique({
    where: { id: enquiryId }
  });

  if (!enquiry) {
    return Response.json({ success: false });
  }

  await prisma.admission.create({
    data: {
      // ❌ removed enquiryId
      studentName: enquiry.name,
      phone: enquiry.phone || "",
      email: enquiry.email,
      classApplied: "Pending",
      fatherName: "",
      motherName: ""
    }
  });

  await prisma.contactEnquiry.update({
    where: { id: enquiryId },
    data: { status: "Converted" }
  });

  return Response.json({ success: true });
}