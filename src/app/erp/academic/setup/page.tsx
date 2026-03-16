"use client"

import { useState } from "react"

export default function AcademicSetup() {

  const [classes,setClasses] = useState("")
  const [sections,setSections] = useState("")

  const handleSetup = async () => {

    const classArray = classes.split(",")
    const sectionArray = sections.split(",")

    await fetch("/api/academic/setup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        classes:classArray,
        sections:sectionArray
      })
    })

    alert("Academic structure created")

  }

  return (

    <div className="max-w-md">

      <h1 className="text-xl font-semibold mb-4">
        Academic Setup
      </h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Classes (1,2,3,4)"
        value={classes}
        onChange={(e)=>setClasses(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Sections (A,B,C)"
        value={sections}
        onChange={(e)=>setSections(e.target.value)}
      />

      <button
        onClick={handleSetup}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Generate Classes
      </button>

    </div>

  )
}