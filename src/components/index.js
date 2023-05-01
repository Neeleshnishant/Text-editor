import {Component} from 'react'
import './TextEditor.css'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  handleBoldClick = () => {
    this.setState(prevState => ({
      boldActive: !prevState.boldActive,
    }))
  }

  handleItalicClick = () => {
    this.setState(prevState => ({
      italicActive: !prevState.italicActive,
    }))
  }

  handleUnderlineClick = () => {
    this.setState(prevState => ({
      underlineActive: !prevState.underlineActive,
    }))
  }

  getStyle = () => {
    const style = {}
    const {boldActive, italicActive, underlineActive} = this.state
    if (boldActive) {
      style.fontWeight = 'bold'
    } else {
      style.fontWeight = 'normal'
    }
    if (italicActive) {
      style.fontStyle = 'italic'
    } else {
      style.fontStyle = 'normal'
    }
    if (underlineActive) {
      style.textDecoration = 'underline'
    } else {
      style.textDecoration = 'normal'
    }
    return style
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state
    console.log(underlineActive)
    return (
      <div className="editor">
        <h1>Text editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <div className="toolbar">
          <ul>
            <li>
              <button
                className={boldActive ? 'active' : 'inactive'}
                onClick={this.handleBoldClick}
                data-testid="bold"
                type="button"
              >
                B
              </button>
            </li>
            <li>
              <button
                className={italicActive ? 'active' : ''}
                onClick={this.handleItalicClick}
                data-testid="italic"
                type="button"
              >
                I
              </button>
            </li>
            <li>
              <button
                className={underlineActive ? 'active' : ''}
                onClick={this.handleUnderlineClick}
                data-testid="underline"
                type="button"
              >
                U
              </button>
            </li>
          </ul>
        </div>
        <textarea style={this.getStyle()} />
      </div>
    )
  }
}

export default TextEditor
