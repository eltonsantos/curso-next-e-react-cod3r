import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual inseto transmite a doença de chagas?", [
    AnswerModel.wrong("Abelha"),
    AnswerModel.wrong("Barata"),
    AnswerModel.wrong("Pulga"),
    AnswerModel.right("Barbeiro"),
    // new AnswerModel('Abelha', false),
    // new AnswerModel('Barata', false),
    // new AnswerModel('Barbeiro', true),
    // new AnswerModel('Pulga', false),
  ]),
  new QuestionModel(302, "Qual fruto é conhecido commo jerimum?", [
    AnswerModel.wrong("Caju"),
    AnswerModel.wrong("Chuchu"),
    AnswerModel.wrong("Beterraba"),
    AnswerModel.right("Abobora"),
  ])
]

export default questions