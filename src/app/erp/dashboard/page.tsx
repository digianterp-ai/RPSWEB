import { prisma } from "@/lib/prisma";
import {
  Users,
  Mail,
  GraduationCap,
  CreditCard
} from "lucide-react";

import DashboardHeader from "@/components/erp/DashboardHeader";

async function getStats() {

  const [
    enquiries,
    students,
    admissions,
    fees,
    recentEnquiries
  ] = await Promise.all([

    prisma.contactEnquiry.count(),

    prisma.student.count(),

    prisma.admission.count(),

    prisma.feePayment.aggregate({
      _sum: { amount: true }
    }),

    prisma.contactEnquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 5
    })

  ]);

  return {
    enquiries,
    students,
    admissions,
    fees: fees._sum.amount || 0,
    recentEnquiries
  };
}

export default async function Dashboard() {

  const stats = await getStats();

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <DashboardHeader />



      {/* STAT CARDS */}

      <div className="grid md:grid-cols-4 gap-8">

        {/* ENQUIRIES */}

        <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm opacity-80">
                Website Enquiries
              </p>

              <p className="text-3xl font-bold mt-2">
                {stats.enquiries}
              </p>

            </div>

            <Mail size={28} className="opacity-80" />

          </div>

        </div>


        {/* STUDENTS */}

        <div className="bg-linear-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm opacity-80">
                Total Students
              </p>

              <p className="text-3xl font-bold mt-2">
                {stats.students}
              </p>

            </div>

            <Users size={28} className="opacity-80" />

          </div>

        </div>


        {/* ADMISSIONS */}

        <div className="bg-linear-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm opacity-80">
                Admissions
              </p>

              <p className="text-3xl font-bold mt-2">
                {stats.admissions}
              </p>

            </div>

            <GraduationCap size={28} className="opacity-80" />

          </div>

        </div>


        {/* FEES */}

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm opacity-80">
                Fee Collection
              </p>

              <p className="text-3xl font-bold mt-2">
                ₹{stats.fees}
              </p>

            </div>

            <CreditCard size={28} className="opacity-80" />

          </div>

        </div>

      </div>



      {/* CHART SECTION */}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">

          <h2 className="text-lg font-semibold mb-4">
            Attendance Overview
          </h2>

          <div className="h-64 flex items-center justify-center text-gray-400">

            Attendance Chart Coming Soon

          </div>

        </div>


        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">

          <h2 className="text-lg font-semibold mb-4">
            Monthly Fee Collection
          </h2>

          <div className="h-64 flex items-center justify-center text-gray-400">

            Fee Chart Coming Soon

          </div>

        </div>

      </div>



      {/* RECENT ENQUIRIES */}

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">

        <h2 className="text-lg font-semibold text-[#0B1F3A] mb-6">
          Recent Enquiries
        </h2>


        <div className="space-y-4">


          {stats.recentEnquiries.length === 0 && (

            <div className="text-center text-gray-400 py-10">

              No enquiries yet

            </div>

          )}


          {stats.recentEnquiries.map((enquiry) => (

            <div
              key={enquiry.id}
              className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition"
            >


              <div>

                <p className="font-semibold text-[#0B1F3A]">
                  {enquiry.name}
                </p>

                <p className="text-sm text-gray-500">
                  {enquiry.email}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {enquiry.message}
                </p>

              </div>


              <div className="text-sm text-gray-400">
                {new Date(enquiry.createdAt).toLocaleDateString()}
              </div>


            </div>

          ))}


        </div>

      </div>


    </div>

  );
}