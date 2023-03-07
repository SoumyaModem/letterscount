import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onLettersCount = event => {
    const newText = event.target.value
    this.setState({count: newText})
  }

  render() {
    const {count} = this.state
    const length1 = count.length

    return (
      <div className="container">
        <div className="letter-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="phrase" htmlFor="userInput">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="text"
            id="userInput"
            onChange={this.onLettersCount}
          />
          <p className="button" type="button">
            No.of letters: {length1}
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
