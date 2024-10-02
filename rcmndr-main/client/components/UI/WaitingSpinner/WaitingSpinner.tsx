import { ThreeCircles } from 'react-loader-spinner'

export default function WaitingSpinner() {
  return (
    <ThreeCircles
      visible={true}
      height="50"
      width="50"
      color="#ff17ce"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}
