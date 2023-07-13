import { shuffle } from "@/functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #title: string
  #answers: AnswerModel[]
  #got: boolean
  // #answered: boolean

  constructor(id: number, title: string, answers: AnswerModel[], got = false) {
    this.#id = id
    this.#title = title
    this.#answers = answers
    this.#got = got
  }

  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get answers() {
    return this.#answers
  }

  get got() {
    return this.#got
  }

  get notAnswered() {
    return !this.answered
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true
    }
    return false
  }

  replyWith(index: number): QuestionModel {
    const got = this.#answers[index]?.right
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i
      const mustReveal = selectedAnswer || answer.right
      return mustReveal ? answer.reveal() : answer
    })
    return new QuestionModel(this.id, this.title, answers, got)
  }

  shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#title, shuffledAnswers, this.#got)
  }

  static createUsingObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map(resp => AnswerModel.createUsingObject(resp))
    return new QuestionModel(obj.id, obj.title, answers, obj.got)
  }

  fromObject() {
    return {
      id: this.#id,
      title: this.#title,
      got: this.#got,
      answered: this.answered,
      answers: this.#answers.map(answer => answer.fromObject()),
    }
  }
}