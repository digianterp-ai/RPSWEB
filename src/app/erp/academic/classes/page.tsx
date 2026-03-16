"use client"

import { useState } from "react"

export default function ClassesPage() {

  const [name, setName] = useState("")

  const createClass = async () => {

    await fetch("/api/academic/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

    setName("")
  }

  return (
    <div>

      <h1>Classes</h1>

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Class Name"
      />

      <button onClick={createClass}>
        Add Class
      </button>

    </div>
  )
}