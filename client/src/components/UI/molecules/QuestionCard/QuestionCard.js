import React from 'react'
import  '../../molecules/style.css'
import QuestionCardHeader from '../QuestionCardHeader/QuestionCardHeader'
import QuestionCardBody from '../QuestionCardBody/QuestionCardBody'
import PropTypes from 'prop-types';

const QuestionCard = ({width, height, question}) => {
  const style = {
    width,
    height
  }
  return (
    <div class="containerDiv" style={style}>
      <QuestionCardHeader height="10vh" text="Question Card Header" />
      <QuestionCardBody height="35vh" backgroundColor="#9EABB6" question={question}/>
    </div>
  )
}
QuestionCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default QuestionCard