import questions from "../dbQuestions"

export default (req: any, res: any) => {

  const selectedId = +req.query.id

  const uniqueQuestionOrNothing = questions.filter(question => question.id === selectedId)

  if (uniqueQuestionOrNothing.length === 1) {
    const selectedQuestion = uniqueQuestionOrNothing[0].shuffleAnswers()
    res.status(200).json(selectedQuestion.fromObject())
  } else {
    res.status(204).send()
  }
  
}