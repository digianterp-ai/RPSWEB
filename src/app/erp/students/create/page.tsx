"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateStudentPage() {

  const router = useRouter()

  const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  classId: "",
  sectionId: "",
  academicYearId: ""
})

  const handleChange = (e:any) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e:any) => {

    e.preventDefault()

    await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    router.push("/erp/students/list")

  }

  return (

    <div className="max-w-xl">

      <h1 className="text-xl font-semibold mb-4">
        Create Student
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >

        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <select
          name="gender"
          onChange={handleChange}
          className="w-full border p-2"
        >

          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>

        </select>

        <input
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
          className="w-full border p-2"
        />

         <select
        name="classId"
        onChange={handleChange}
        className="w-full border p-2"
        >

        <option value="">Select Class</option>
        <option value="CLASS_ID_1">Class 1</option>
        <option value="CLASS_ID_2">Class 2</option>

        </select>


        <select
        name="sectionId"
        onChange={handleChange}
        className="w-full border p-2"
        >

        <option value="">Select Section</option>
        <option value="SECTION_ID_A">A</option>
        <option value="SECTION_ID_B">B</option>

        </select>


        <select
        name="academicYearId"
        onChange={handleChange}
        className="w-full border p-2"
        >

        <option value="">Select Academic Year</option>
        <option value="YEAR_ID">2025-2026</option>

        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Student
        </button>

      </form>

    </div>

  )

}