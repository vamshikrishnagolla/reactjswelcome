// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {issubcribed: false}

  issubed = () => {
    this.setState(prevState => ({issubcribed: !prevState.issubcribed}))
  }
  getButton = () => {
    const {issubcribed} = this.state

    return issubcribed ? 'Subscribed' : 'Subscribe'
  }
  render() {
    const buttontext = this.getButton()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" onClick={this.issubed}>
          {buttontext}
        </button>
      </div>
    )
  }
}

export default Welcome
