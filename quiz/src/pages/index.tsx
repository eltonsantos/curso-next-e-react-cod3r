import Questionary from "@/components/Questionary";
import QuestionModel from "@/model/question";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const BASE_URL = 'http://localhost:3000/api'
const BASE_URL = 'https://quiz-eltonsantos.vercel.app/api'


export default function Home() {
  const router = useRouter()
  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswers, setRightAnswers] = useState<number>(0)

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/questionary`)
    const questionsIds = await resp.json()
    setQuestionsIds(questionsIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const got = questionAnswered.got
    setRightAnswers(rightAnswers + (got ? 1 : 0))
  }

  function idNextQuestion() {
    const nextIndex = questionsIds.indexOf(question.id) + 1
    return questionsIds[nextIndex]
  }

  function goToNextStep() {
    const nextId = idNextQuestion()
    nextId ? goToNextQuestion(nextId) : finish()
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        right: rightAnswers
      }
    })
  }

  return question ? (
    <Questionary
      question={question}
      last={idNextQuestion() === undefined}
      questionAnswered={questionAnswered}
      goToNextStep={goToNextStep}
    />
  ) : false
}
