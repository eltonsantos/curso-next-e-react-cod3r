import { shuffle } from '@/functions/arrays'
import questions from '../dbQuestions'

export default function questionary(req: any, res: any) {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}