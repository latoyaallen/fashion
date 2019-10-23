import React from 'react';
import QuizButtons from './QuizButtons'

const quizContainer = {
  right: 80,
}

const Quiz = (props) => (
  <div>
    {props.question}
    <QuizButtons
      correctAnswer={props.correctAnswer}
      possibleAnswers={props.possibleAnswers}
    />
  </div>
)

export default Quiz;

// We need to create an onClic handler called handleOnClick and pass it down to the child component
