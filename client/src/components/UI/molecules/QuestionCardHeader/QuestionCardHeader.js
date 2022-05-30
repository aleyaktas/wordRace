import React from 'react'
import Text from '../../atoms/Text/Text'

const QuestionCardHeader = ({height, text}) => {
  const style= {
    height,
    backgroundColor: "#F6EED1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={style}>
      <Text text={text} margin="0px" />
    </div>
  )
}

export default QuestionCardHeader