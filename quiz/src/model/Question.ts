export default class QuestionModel {
  #id: number
  #title: string
  #answers: any[]
  #got: boolean
  // #answered: boolean

  constructor(id: number, title: string, answers: any[], got = false) {
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
    return false
  }

}