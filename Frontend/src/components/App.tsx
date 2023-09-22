import { RequireAuth } from 'helper/RequireAuth'
import DashboardPage from 'pages/dashboard-page'
import LoginPage from 'pages/login-page'

import Dashboard from 'features/Dashboard'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Authenticator } from '@aws-amplify/ui-react'
import AuthenticatedTemplate from 'layouts/authenticated'
import Upload from 'pages/upload-file-page'
import { useAuth } from 'hooks/auth'
import { useEffect } from 'react'

const router = createHashRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <AuthenticatedTemplate>
          <DashboardPage />
        </AuthenticatedTemplate>
      </RequireAuth>
    ),
    children: [{
      path: '/upload-file',
      element: (
        <Upload/>
      )
    }, {
      path: '/home',
      element: (
        <Dashboard />
      )
    }]
  },

])

function App() {
  const { user, signUp, signIn, signOut } = useAuth();

  useEffect(() => {
    console.log({user})
  }, [])
  
  return (
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  )
}

export default App
