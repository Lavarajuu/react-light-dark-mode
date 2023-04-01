// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    container: 'container1',
    buttonText: 'Light Mode',
    heading: 'heading1',
    button: 'button',
  }

  changeMode = () => {
    const {container, buttonText, heading, button} = this.state
    if (buttonText === 'Light Mode') {
      this.setState({
        container: 'container2',
        buttonText: 'Dark Mode',
        heading: 'heading2',
        button: 'button',
      })
    } else {
      this.setState({
        container: 'container1',
        buttonText: 'Light Mode',
        heading: 'heading1',
        button: 'button',
      })
    }
  }

  render() {
    const {container, buttonText, heading, button} = this.state
    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className={heading}>Click To Count</h1>
          <br />
          <button type="button" className={button} onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
