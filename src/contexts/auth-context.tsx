'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/types'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: any) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize auth state
    setLoading(false)
  }, [])

  const signIn = async (_email: string, _password: string): Promise<void> => {
    // Implementation will be added later
  }

  const signUp = async (
    _email: string,
    _password: string,
    _userData: any
  ): Promise<void> => {
    // Implementation will be added later
  }

  const signOut = async (): Promise<void> => {
    // Implementation will be added later
  }

  const updateProfile = async (
    _data: Partial<User>
  ): Promise<void> => {
    // Implementation will be added later
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}