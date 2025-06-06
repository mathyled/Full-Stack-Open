import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


function App() {
  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;
  return (
    <>
    <Header course={course}/>
    <Content part={part1} exercices={exercises1} />
    <Content part={part2} exercices={exercises2} />
    <Content part={part3} exercices={exercises3} />
    <Total  total={total} />
    </>
  );
}

export default App;
