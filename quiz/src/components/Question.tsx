import styles from "@/styles/Question.module.css"
import QuestionModel from "@/model/question"
import Title from "./Title"
import Answer from "./Answer"

const letras = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
]

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionModel) {
  const question = props.value

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return <Answer value={answer} index={i} letter='A' colorLetter='#f2c866' />
    })
  }

  return (
    <div className={styles.question}>
      <Title text={question.title} /> 
      {renderAnswers()}
    </div>
  )

}