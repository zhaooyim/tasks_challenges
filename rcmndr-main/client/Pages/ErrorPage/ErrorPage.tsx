import Header from '../../components/Header/Header'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col bg-darkPurple  max-h-full min-h-screen text-white">
        <Header />
        <div className="flex max-h-full min-h-screen flex-col items-center  py-6 m-10 ">
          <div className="relative flex items-center justify-center w-50 h-50 bg-purple-300 text-white rounded-full m-6">
            <i className="fas fa-skull-crossbones text-black text-7xl m-8"></i>
          </div>
          <p className="flex justify-center items-center  text-s text-lightPurple m-6">
            Something went wrong
          </p>

          <Button
            className="flex justify-center bg-white text-primary m-6"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </div>
      </div>
    </>
  )
}
