import { useState } from "react"

const IncrementButton = () => {
  const [num, setNum] = useState(0)
  const onClickButton = () => {
    setNum(num + 1)
    console.log(num)
  }
  return (
    <div>
      {num}
      <button onClick={onClickButton}>+1</button>
    </div>
  )
}

export default IncrementButton;