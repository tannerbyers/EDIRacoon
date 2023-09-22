import React, { FC, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthenticator } from '@aws-amplify/ui-react'
import Shell from 'layouts/shell'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Grid from '@cloudscape-design/components/grid'
import Header from '@cloudscape-design/components/header'
import Link from '@cloudscape-design/components/link'
import HelpPanel from '@cloudscape-design/components/help-panel'
import Container from '@cloudscape-design/components/container'
import './index.css'
import Navigation from 'components/Navigation'
import Editor from 'components/Editor'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }

const Dashboard: FC<Props> = () => {
  const [activeHref, setActiveHref] = useState('')
  return (
    <Shell
      navigation={
        <Navigation activeHref={activeHref} setActiveHref={setActiveHref} />
      }
    >
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </Shell>
  )
}

export default Dashboard
