export default class AnswerModel {
  #value: string
  #right: boolean
  #revealed: boolean

  constructor(value: string, right: boolean, revealed = false) {
    this.#value = value
    this.#right = right
    this.#revealed = revealed
  }

  get value() {
    return this.#value
  }

  get right() {
    return this.#right
  }

  get revealed() {
    return this.#revealed
  }
}