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
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
    AnswerModel.wrong('Manada'),
    AnswerModel.wrong('Alcateia'),
    AnswerModel.wrong('Rebanho'),
    AnswerModel.right('Matilha'),
  ]),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      AnswerModel.wrong('Equilátero'),
      AnswerModel.wrong('Isóceles'),
      AnswerModel.wrong('Trapézio'),
      AnswerModel.right('Escaleno'),
  ]),
]

export default questions