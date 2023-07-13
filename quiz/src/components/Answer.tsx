import AnswerModel from '@/model/answer'
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  colorBgLetter: string
}

export default function Answer(props: AnswerProps) {

  return (
    <div className={styles.answer}>
      <div className={`${styles.contentAnswer}`}>
        <div className={styles.front}>
          <div className={styles.letter}
            style={{ backgroundColor: props.colorBgLetter }}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}>
          {answer.right ? (
            <div className={styles.right}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}