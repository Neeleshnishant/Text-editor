import React, {useState} from 'react'

function TextEditor() {
  const [text, setText] = useState('')
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  const handleBoldClick = () => {
    setIsBold(!isBold)
  }

  const handleItalicClick = () => {
    setIsItalic(!isItalic)
  }

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline)
  }

  const handleChange = event => {
    setText(event.target.value)
  }

  const boldStyle = isBold ? {fontWeight: 'bold'} : {}
  const italicStyle = isItalic ? {fontStyle: 'italic'} : {}
  const underlineStyle = isUnderline ? {textDecoration: 'underline'} : {}

  return (
    <div>
      <h1>Text Editor</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        alt="text editor"
      />
      <ul>
        <li>
          <button
            style={{backgroundColor: isBold ? '#f1f5f9' : '#faff00'}}
            onClick={handleBoldClick}
            data-testid="bold"
          >
            B
          </button>
        </li>
        <li>
          <button
            style={{backgroundColor: isItalic ? '#faff00' : '#f1f5f9'}}
            onClick={handleItalicClick}
            data-testid="italic"
          >
            I
          </button>
        </li>
        <li>
          <button
            style={{backgroundColor: isUnderline ? '#faff00' : '#f1f5f9'}}
            onClick={handleUnderlineClick}
            data-testid="underline"
          >
            U
          </button>
        </li>
        <textarea
          style={{...boldStyle, ...italicStyle, ...underlineStyle}}
          value={text}
          onChange={handleChange}
        />
      </ul>
    </div>
  )
}

export default TextEditor
