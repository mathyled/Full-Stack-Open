import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import course from "./data"
const App = () => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.length} />
  
    </div>
  )
}

export default App