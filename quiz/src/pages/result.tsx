import styles from '../styles/Result.module.css'
import Button from '../components/Button'
import { useRouter } from 'next/router'

export default function Result() {
  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  )
}