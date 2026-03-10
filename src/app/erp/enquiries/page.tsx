import { prisma } from "@/lib/prisma";
import EnquiryList from "../../../components/erp/EnquiryList";



export const dynamic = "force-dynamic";

async function getEnquiries() {
  return await prisma.contactEnquiry.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function EnquiriesPage() {

  const enquiries = await getEnquiries();
  console.log("ENQUIRIES:", enquiries);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8 text-[#0B1F3A]">
        Website Enquiries
      </h1>

      <EnquiryList enquiries={enquiries} />

      

    </div>
  );
}