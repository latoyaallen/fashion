const boatBarcelona= require('./images/boatBarcelona.png')

const quiz = [
  {
    "id": "1",
    "image":boatBarcelona,
    "question":"¿Cuál de estos no está en la foto?",
    "correctAnswer":"Coche",
    "possibleAnswers":['Barco','Árbol','Hierba', 'Coche'],
  },
  {
    "id": "2",
    "image":boatBarcelona,
    "question":"¿Qué color no está en la foto?",
    "correctAnswer":"Rojo",
    "possibleAnswers":['Azul','Verde','Rosa', 'Rojo'],
  },
  {
    "id": "3",
    "image":boatBarcelona,
    "question":"¿De qué lado de la foto está el árbol?",
    "correctAnswer":"Derecha",
    "possibleAnswers":['Izquierda','Contenido','Clima', 'Derecha'],
  },
  {
    "id": "4",
    "image":boatBarcelona,
    "question":"¿De qué lado de la foto está el barco?",
    "correctAnswer":"Izquierda",
    "possibleAnswers":['Derecha','Contenido','Clima', 'Izquierda'],
  },
]

export default quiz;
