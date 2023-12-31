import React, { Dispatch, SetStateAction, useState } from 'react'
import './index.css' // Import the CSS file

interface Props {
  setOutput: Dispatch<SetStateAction<string>>
}
const Editor = ({ setOutput }: Props) => {
  const [content, setContent] = useState<string>('')

  const linebreakOnSegment = (ediData: string) => {
    const tildeWithNoLinebreakAfterIt = /~(?!.*\n)/g
    const result = ediData.replaceAll(tildeWithNoLinebreakAfterIt, '~\n')
    setContent(result)

    fetch(
      'https://q889z46fad.execute-api.us-east-1.amazonaws.com/dev/x12parser',
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: result
      }
    )
      .then((response) => response.json())
      .then((json) => setOutput(JSON.stringify(json)))
      .catch((error) => console.error(error))
  }
  return (
    <>
      <div className="container">
        <textarea
          id="htmlCode"
          placeholder="Paste your EDI transaction here"
          spellCheck="false"
          onChange={(e) => {
            linebreakOnSegment(e.target.value)
          }}
          value={content}
        ></textarea>
      </div>
    </>
  )
}

export default Editor
