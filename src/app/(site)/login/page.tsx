"use client";

import { useState } from "react";

export default function LoginPage() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleLogin = async (e: React.FormEvent) => {

e.preventDefault();
setLoading(true);

try {

  const res = await fetch("/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.success) {

    /* IMPORTANT */
    window.location.href = "/erp/dashboard";

  } else {

    alert(data.error || "Login failed");

  }

} catch (error) {

  console.error(error);
  alert("Login error");

}

setLoading(false);

};

return (

<div className="flex items-center justify-center py-20">

  <form
    onSubmit={handleLogin}
    className="bg-white shadow-lg rounded-xl p-8 w-96"
  >

    <h2 className="text-xl font-semibold mb-6 text-center">
      ERP Login
    </h2>

    <input
      type="email"
      placeholder="Email"
      className="w-full border px-3 py-2 rounded mb-4"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full border px-3 py-2 rounded mb-4"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded"
    >
      {loading ? "Logging in..." : "Login"}
    </button>

  </form>

</div>

);

}