import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import { useState } from "react";

export default function App() {
  const [rewiewType, setRewiewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleGood() {
    console.log(123);
    setRewiewType({ ...rewiewType, good: rewiewType.good + 1 });
  }
  function handleNeutral() {
    rewiewType.neutral += 1;
    setRewiewType(rewiewType);
  }
  function handleBad() {
    rewiewType.bad += 1;
    setRewiewType(rewiewType);
  }
  function handleReset() {
    setRewiewType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
        handleReset={handleReset}
      />
      <Feedback rewiewType={rewiewType} />
    </>
  );
}
