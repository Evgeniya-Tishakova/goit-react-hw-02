import { useEffect, useState } from "react";

import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [rewiewType, setRewiewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = rewiewType.good + rewiewType.neutral + rewiewType.bad;

  const updateFeedback = (feedbackType) => {
    setRewiewType({
      ...rewiewType,
      [feedbackType]: rewiewType[feedbackType] + 1,
    });
  };

  const reset = () => {
    setRewiewType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={reset}
        isShown={totalFeedback > 0}
      />
      <Feedback rewiewType={rewiewType} totalFeedback={totalFeedback} />
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}
