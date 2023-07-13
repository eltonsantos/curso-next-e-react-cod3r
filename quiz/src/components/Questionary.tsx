import styles from '../styles/Questionary.module.css'
import Question from './Question'
import Button from './Button'
import QuestionModel from "../model/question"

interface QuestionaryProps {
  question: QuestionModel
  last: boolean
  questionAnswered: (question: QuestionModel) => void
  goToNextStep: () => void
}

export default function Questionary(props: QuestionaryProps) {

  function onResponse(index: number) {
    if (props.question.notAnswered) {
      props.questionAnswered(props.question.replyWith(index))
    }
  }

  return (
    <div className={styles.questionary}>
      {props.question ?
        <Question
          value={props.question}
          timeToReply={6}
          onResponse={onResponse}
          timeout={props.goToNextStep} />
        : false
      }

      <Button onClick={props.goToNextStep} text={props.last ? 'Finalizar' : 'Próxima'} />
    </div>
  )
}