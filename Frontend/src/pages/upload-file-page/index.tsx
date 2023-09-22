import React, { FC, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Upload: FC<Props> = () => {
  const [activeHref, setActiveHref] = useState('')
  const [output, setOutput] = useState('')
  return (
    <div>
        We have uplaods
    </div>
  )
}

export default Upload
