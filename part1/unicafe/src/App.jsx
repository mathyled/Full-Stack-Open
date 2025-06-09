import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleInputGood = () => {
    setGood((prevGood) => prevGood + 1);
  };

  const handleInputNeutral = () => {
    setNeutral((currect) => currect + 1);
  };
  const handleInputBad = () => {
    setBad((current) => current + 1);
  };

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (good / total) * 100 || 0;

  return (
    <>
      <h2>give feedback</h2>
      <Button handle={handleInputGood} value="good" />
      <Button handle={handleInputNeutral} value="neutral" />
      <Button handle={handleInputBad} value="bad" />

      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </>
  );
}

export default App;
