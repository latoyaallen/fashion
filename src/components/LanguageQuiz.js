import React from 'react';
import Image from './Image';
import Quiz from './Quiz';
import spanishQuiz from '../data/spanishQuiz';

const row = {
  display: 'flex',
}

const column = {
  padding: '10px 10px ',
}

const LanguageQuiz = () => (
  <div style={row}>
    <div style={column}>
      <Image
        key={spanishQuiz[0].id}
        image={spanishQuiz[0].image}
      />
    </div>
    <div style={column}>
      <Quiz
        key={spanishQuiz[0].id}
        question={spanishQuiz[0].question}
        correctAnswer={spanishQuiz[0].correctAnswer}
        possibleAnswers={spanishQuiz[0].possibleAnswers}
      />
    </div>
  </div>
);

export default LanguageQuiz;
