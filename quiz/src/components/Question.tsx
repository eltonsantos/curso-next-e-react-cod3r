import styles from "@/styles/Question.module.css"
import QuestionModel from "@/model/question"
import Title from "./Title"

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
  return (
    <div className={styles.question}>
      <Title text={question.title} /> 
    </div>
  )

}