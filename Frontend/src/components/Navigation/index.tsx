// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react'
import SideNavigation, {
  SideNavigationProps
} from '@cloudscape-design/components/side-navigation'

const items: SideNavigationProps['items'] = [
  { type: 'link', text: 'Dashboard', href: '#/home' },
  { type: 'link', text: 'Integration', href: '#/integration' },
  { type: 'link', text: 'Trading Partner', href: '#/trading-partner' },
  { type: 'link', text: 'Rule', href: '#/rule' },
]

interface NavigationProps {
  activeHref: string
  setActiveHref: (activeHref: string) => void
}

export default function Navigation({
  activeHref,
  setActiveHref
}: NavigationProps) {
  console.log(activeHref)

  return (
    <>
      <SideNavigation
        activeHref={activeHref}
        onFollow={(event) => {
          if (!event.detail.external) {
            setActiveHref(event.detail.href)
          }
        }}
        header={{ href: '/', text: '' }}
        items={items}
      />
    </>
  )
}
