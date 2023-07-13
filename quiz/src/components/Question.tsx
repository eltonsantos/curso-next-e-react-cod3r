import styles from "@/styles/Question.module.css"
import QuestionModel from "@/model/question"
import Title from "./Title"
import Answer from "./Answer"
import Timer from "./Timer"

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
]

interface QuestionProps {
  value: QuestionModel
  timeToRepply?: number
  onResponse: (index: number) => void
  timeout: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          value={answer}
          index={i}
          letter={letters[i].value}
          colorBgLetter={letters[i].color}
          onResponse={props.onResponse}
        />
      )
    })
  }

  return (
    <div className={styles.question}>
      <Title text={question.title} />
      <Timer key={question.id}
        duration={props.timeToRepply ?? 10}
        timeout={props.timeout} />
      {renderAnswers()}
    </div>
  )

}