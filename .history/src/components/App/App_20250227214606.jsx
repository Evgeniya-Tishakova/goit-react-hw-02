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

  // {good: 5}
  function handleClicks(obj) {
    setRewiewType({
      ...rewiewType,
      ///{
      //   good: 0,
      //   neutral: 0,
      //   bad: 0,
      // }
      ...obj,
      ///{
      //   good: 5,
      //   neutral: 0,
      //   bad: 0,
      // }
    });
  }

  return (
    <>
      <Description />
      <Options handleClicks={handleClicks} />
      <Feedback rewiewType={rewiewType} />
    </>
  );
}
