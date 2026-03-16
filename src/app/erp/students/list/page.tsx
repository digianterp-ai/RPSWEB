"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

<Link
  href="/erp/students/create"
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Add Student
</Link>

export default function StudentListPage() {

  const [students, setStudents] = useState<any[]>([])

  useEffect(() => {

    fetch("/api/students")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load students")
    return res.json()
  })
  .then(data => setStudents(data))
  .catch(err => console.error(err))

  }, [])

  return (

    <div className="space-y-4">

      <h1 className="text-xl font-semibold">
        Students
      </h1>

      <div className="space-y-3">

        {students.map((s:any) => (

          <div
            key={s.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >

            <div>

              <p className="font-semibold">
                {s.firstName} {s.lastName}
              </p>

              <p className="text-sm text-gray-500">
                Admission: {s.admissionNumber}
              </p>

            </div>

            <Link
              href={`/erp/students/profile/${s.id}`}
              className="text-blue-600 text-sm"
            >
              View Profile
            </Link>

          </div>

        ))}

      </div>

    </div>

  )

}