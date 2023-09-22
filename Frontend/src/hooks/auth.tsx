import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'

interface IUser {
  attributes: {
    email: string
  }
}

export function useAuth() {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  async function checkAuthStatus() {
    try {
      const currentUser = await Auth.currentAuthenticatedUser()
      setUser(currentUser)
    } catch (error) {
      setUser(null)
    }
  }

  async function signUp(username: string, password: string) {
    try {
      await Auth.signUp({ username, password })
      // Handle successful signup (e.g., redirect or show a success message)
    } catch (error) {
      // Handle signup error (e.g., display an error message)
    }
  }

  async function signIn(username: string, password: string) {
    try {
      await Auth.signIn(username, password)
      checkAuthStatus()
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  }

  async function signOut() {
    try {
      await Auth.signOut({ global: true })
      setUser(null)
      // Handle successful sign out
    } catch (error) {
      // Handle sign out error
    }
  }

  return {
    user,
    signUp,
    signIn,
    signOut
  }
}
