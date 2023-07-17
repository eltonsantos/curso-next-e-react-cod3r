import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
  user?: User
  loading?: boolean
  signUp?: (email: string, password: string) => Promise<void>
  login?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalizing(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL
  }
}

function settingCookie(logged: boolean) {
  if (logged) {
    Cookies.set('admin-template-cod3r-auth', logged, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>(null)

  async function configuringSession(firebaseUser) {
    if (firebaseUser?.email) {
      const user = await userNormalizing(firebaseUser)
      setUser(user)
      settingCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      settingCookie(false)
      setLoading(false)
      return false
    }
  }

  async function login(email, password) {
    try {
      setLoading(true)
      const resp = await firebase.auth()
        .signInWithEmailAndPassword(email, password)

      await configuringSession(resp.user)
      route.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function signUp(email, password) {
    try {
      setLoading(true)
      const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, password)

      await configuringSession(resp.user)
      route.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      await configuringSession(resp.user)
      route.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configuringSession(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configuringSession)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signUp,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext