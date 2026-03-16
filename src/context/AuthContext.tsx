"use client";

import { createContext, useContext } from "react";

export type User = {
  name: string;
  role: string;
};

const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  // TEMP USER (later from API / JWT)
  const user = {
    name: "Super Admin",
    role: "SUPER_ADMIN"
  };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}