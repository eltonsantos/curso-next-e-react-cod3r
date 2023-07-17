import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hooks/useAuth'

export default function ForceAuthentication(props) {

  const { user, loading } = useAuth()

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/authentication"
                                }
                            `
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className={`
                flex justify-center items-center h-screen
            `}>
        <Image src={loading} alt="User Avatar" />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push('/authentication')
    return null
  }
}