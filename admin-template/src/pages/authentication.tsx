import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"
import { AttentionIcon } from "../components/icons"
import useAuth from "../data/hooks/useAuth"

export default function Authentication() {

  const { signUp, login, loginGoogle } = useAuth()

  const [error, setError] = useState(null)
  const [mode, setMode] = useState<'login' | 'signUp'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function showError(msg: any, timeInSeconds = 5) {
    setError(msg)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

  async function submit() {
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await signUp(email, password)
      }
    } catch (e) {
      showError(e?.message ?? 'Erro desconhecido!')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full object-cover" />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>

        {error ? (
          <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
            {AttentionIcon()}
            <span className="ml-3">{error}</span>
          </div>
        ) : false}

        <AuthInput
          label="Email"
          type="email"
          value={email}
          changeValue={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          changeValue={setPassword}
          required
        />

        <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
          Entrar com Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setMode('signUp')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Crie um Conta Gratuitamente</a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a onClick={() => setMode('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com a suas Credenciais</a>
          </p>
        )}
      </div>
    </div>
  )
}