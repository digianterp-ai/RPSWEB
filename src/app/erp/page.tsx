import { prisma } from "@/lib/prisma";
import {
  Users,
  Mail,
  GraduationCap,
  CreditCard
} from "lucide-react";

async function getStats() {

  const enquiries = await prisma.contactEnquiry.count();

  return {
    enquiries
  };
}

export default async function Dashboard() {

  const stats = await getStats();

  return (

    <div>

      {/* PAGE TITLE */}

      <h1 className="text-3xl font-bold text-[#0B1F3A] mb-8">
        ERP Dashboard
      </h1>


      {/* STAT CARDS */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Enquiries */}

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">

          <div className="bg-blue-100 p-3 rounded-lg">
            <Mail className="text-blue-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Website Enquiries
            </p>

            <p className="text-2xl font-bold">
              {stats.enquiries}
            </p>
          </div>

        </div>


        {/* Students */}

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">

          <div className="bg-green-100 p-3 rounded-lg">
            <Users className="text-green-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Total Students
            </p>

            <p className="text-2xl font-bold">
              0
            </p>
          </div>

        </div>


        {/* Admissions */}

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">

          <div className="bg-purple-100 p-3 rounded-lg">
            <GraduationCap className="text-purple-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Admissions
            </p>

            <p className="text-2xl font-bold">
              0
            </p>
          </div>

        </div>


        {/* Fees */}

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">

          <div className="bg-orange-100 p-3 rounded-lg">
            <CreditCard className="text-orange-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Fee Collection
            </p>

            <p className="text-2xl font-bold">
              ₹0
            </p>
          </div>

        </div>

      </div>


      {/* RECENT ENQUIRIES */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-lg font-semibold mb-4">
          Recent Enquiries
        </h2>

        <p className="text-gray-500 text-sm">
          Latest website enquiries will appear here.
        </p>

      </div>

    </div>
  );
}