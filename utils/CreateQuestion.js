const words = require("../words.js");

const CreateQuestion = () => {
  //create random 20 questions without same question

  let questions = [];
  for (let i = 0; i < 20; i++) {
    let question = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: "",
    };
    let randomWord = Math.floor(Math.random() * words.length);
    while (questions.includes(words[randomWord])) {
      question.question = words[randomWord];
    }
    question.question = words[randomWord].en;
    let randomAnswer = Math.floor(Math.random() * 4);
    let randomA = Math.floor(Math.random() * words.length);
    let randomB = Math.floor(Math.random() * words.length);
    let randomC = Math.floor(Math.random() * words.length);
    let randomD = Math.floor(Math.random() * words.length);
    switch (randomAnswer) {
      case 0:
        question.a = words[randomWord].tr;
        question.b = words[randomB].tr;
        question.c = words[randomC].tr;
        question.d = words[randomD].tr;
        question.answer = "a";
        break;
      case 1:
        question.a = words[randomA].tr;
        question.b = words[randomWord].tr;
        question.c = words[randomC].tr;
        question.d = words[randomD].tr;
        question.answer = "b";
        break;
      case 2:
        question.a = words[randomA].tr;
        question.b = words[randomB].tr;
        question.c = words[randomWord].tr;
        question.d = words[randomD].tr;
        question.answer = "c";
        break;
      case 3:
        question.a = words[randomA].tr;
        question.b = words[randomB].tr;
        question.c = words[randomC].tr;
        question.d = words[randomWord].tr;
        question.answer = "d";
        break;
    }
    questions.push(question);
  }
  return questions;
};

module.exports = CreateQuestion;
