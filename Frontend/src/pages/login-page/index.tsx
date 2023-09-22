import { FC, useEffect } from 'react'

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { useNavigate, useLocation } from 'react-router-dom'
import '@cloudscape-design/global-styles/index.css'
import { Auth } from 'aws-amplify'

import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const LoginPage: FC<Props> = () => {
  const { route } = useAuthenticator((context) => [context.route])
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/home'
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true })
    }
  }, [route, navigate, from])

  const services = {
    async handleSignUp(formData: { username: any; password: any; attributes: any }) {
      let { username, password, attributes } = formData;
      // custom username
      return Auth.signUp({
        username,
        password,
        attributes: {
          'custom:tenantId': `${uuidv4()}`
        },
        autoSignIn: {
          enabled: true,
        },
      });
    },
  };

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
      <Authenticator services={services} loginMechanisms={['email']} />
    </div>
  )
}

export default LoginPage
