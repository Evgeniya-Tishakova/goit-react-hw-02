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

  function handleClicks() {
    setRewiewType(rewiewType + 1);
  }
  return (
    <>
      <Description />
      <Options handleClicks={handleClicks} />
      <Feedback rewiewType={rewiewType} />
    </>
  );
}
