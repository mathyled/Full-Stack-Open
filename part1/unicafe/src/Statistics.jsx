import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const { good, neutral, bad, total, average, positive } = props;

  if (total === 0) {
    return (
      <>
        <p>No feedbacks given</p>
      </>
    );
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
