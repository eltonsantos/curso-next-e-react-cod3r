import questions from "../dbQuestions"

export default (req: any, res: any) => {

  
  res.status(200).json(questions[0])
}