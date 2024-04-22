import {useState} from 'react'
import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {questionText, answerText} = faqDetails

  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  }
  const imageUrl = isOpen
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isOpen ? 'minus' : 'plus'

  const renderAnswerText = () => {
    return(
      <>
        <hr className="line"/>
        <p className="answer">{answerText}</p>
      </>
    )
    
  }

  return (
    <li className="faq-list-item">
      <div className="question-container">
        <h1 className="question-text">{questionText}</h1>
        <button className="button" type="button" onClick={toggleAnswer}>
          <img className="plus-minus-image" src={imageUrl} alt={altText} />
        </button>
      </div>
      {isOpen && renderAnswerText()}
    </li>
  )
}

export default FaqItem
