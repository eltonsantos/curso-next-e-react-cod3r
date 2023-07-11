import Question from "@/components/Question"
import AnswerModel from "@/model/answer"
import QuestionModel from "@/model/question"

export default function Home() {
  const questionTest = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Amarela'),
    AnswerModel.right('Azul'),
    AnswerModel.wrong('Vermelha')
  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={questionTest} />
    </div>
  )
}
