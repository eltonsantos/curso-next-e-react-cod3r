import AnswerModel from '@/model/answer'
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  colorBgLetter: string
  onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const answer = props.value
  const answerReveal = answer.revealed ? styles.answerReveal : ''
  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={`${answerReveal} ${styles.contentAnswer}`}>
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