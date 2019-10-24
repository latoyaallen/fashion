import React from 'react';
import QuizButtons from './QuizButtons'

const Quiz = (props) => (
  <div>
    <h1>{props.question}</h1>
    <QuizButtons
      correctAnswer={props.correctAnswer}
      possibleAnswers={props.possibleAnswers}
    />
  </div>
)

export default Quiz;

// We need to create an onClic handler called handleOnClick and pass it down to the child component
