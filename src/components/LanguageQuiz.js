import React from 'react';
import Image from './Image';
import Quiz from './Quiz';
import quiz from '../data/quiz';

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
        key={quiz[0].id}
        image={quiz[0].image}
      />
    </div>
    <div style={column}>
      <Quiz
        key={quiz[0].id}
        question={quiz[0].question}
        correctAnswer={quiz[0].correctAnswer}
        possibleAnswers={quiz[0].possibleAnswers}
      />
    </div>
  </div>
);

export default LanguageQuiz;
