import { useState } from "react"
import Button from "./components/Button"
import Display from "./components/Display"
import History from "./components/History"

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [allClicks,setAllClicks] = useState([])
  const increaseByOne = () => {
    setCounter(counter + 1)
    setAllClicks(allClicks.concat("+"))
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    setAllClicks(allClicks.concat("-"))
  }
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <History allClicks={allClicks} />
    </div>
  )
}

export default App