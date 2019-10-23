import React from 'react';

const quizContainer = {
  right: 80,
}

const QuizButtons = (props) => (
  <div>
    <button>{props.possibleAnswers[0]}</button>
    <button>{props.possibleAnswers[1]}</button>
    <button>{props.possibleAnswers[2]}</button>
    <button>{props.possibleAnswers[3]}</button>
  </div>
)

export default QuizButtons;

//onClick
//Check to see if the answer they click matches the string of the correct answer
//To do that, we need to create an onClick handler in the parent, and pass it to the QuziButton component.
//
