"use client"

import { createContext, useContext, useState } from "react"
import Backendless from "@/lib/backendless"

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null)

  const login = async (email:string, password:string) => {
    const user = await Backendless.UserService.login(email,password,true)
    setUser(user)
  }

  const logout = async () => {
    await Backendless.UserService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)