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
    handleClicks();
  }
  function handleNeutral() {
    handleClicks();
  }
  function handleBad() {
    handleClicks();
  }
  function handleReset() {
    handleClicks({});
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
