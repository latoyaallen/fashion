const answers = (correct, incorrect) => {
  // We need a way to know which one is the answer
  const possibleAnswers = new Array();
  possibleAnswers.push("Hello ");
  possibleAnswers.push("World ");
  possibleAnswers.push("I'm ");
  possibleAnswers.push("Here");
  return possibleAnswers;

}

export default answers;
