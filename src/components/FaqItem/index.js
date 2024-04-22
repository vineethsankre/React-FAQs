import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  toggleAnswer = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    return (
      <>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isActive} = this.state
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-list-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button className="button" type="button" onClick={this.toggleAnswer}>
            <img className="plus-minus-image" src={imageUrl} alt={altText} />
          </button>
        </div>
        {isActive && this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
