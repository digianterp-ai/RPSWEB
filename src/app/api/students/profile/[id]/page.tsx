"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function StudentProfile() {

  const { id } = useParams()

  const [student,setStudent] = useState<any>(null)

  useEffect(()=>{

    fetch(`/api/students/${id}`)
      .then(res=>res.json())
      .then(setStudent)

  },[id])

  if(!student){
    return <p>Loading...</p>
  }

  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-semibold">
        Student Profile
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <p><b>Name:</b> {student.firstName} {student.lastName}</p>

        <p><b>Admission No:</b> {student.admissionNumber}</p>

        <p><b>Gender:</b> {student.gender}</p>

        <p><b>Date of Birth:</b> {new Date(student.dateOfBirth).toLocaleDateString()}</p>

      </div>

    </div>

  )

}