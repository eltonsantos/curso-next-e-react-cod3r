import AnswerModel from '@/model/answer'
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  colorLetter: string
}

export default function Answer(props: AnswerProps) {
  
  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div className={styles.letter}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  )
}