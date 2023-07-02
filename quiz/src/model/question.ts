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

  get answered() {
    for(let answer of this.#answers) {
      if(answer.revealed) return true
    }
    return false
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      answers: this.#answers.map(answer => answer.toObject()),
      got: this.#got,
    }
  }
}