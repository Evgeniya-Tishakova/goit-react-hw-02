import { useEffect, useState } from "react";

import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [rewiewType, setRewiewType] = useState(() => ({
    good: 0,
    neutral: 0,
    bad: 0,
  }));

  const saveRewiew = localStorage.getItem("current-effect");

  // if (saveRewiew != null) {
  //   return JSON.parse(saveRewiew);
  // }

  const totalFeedback = rewiewType.good + rewiewType.neutral + rewiewType.bad;

  const positiveFeedback = Math.round((rewiewType.good / totalFeedback) * 100);

  const hasFeedback = totalFeedback > 0;

  useEffect(() => {
    localStorage.setItem("current-effect", JSON.stringify(rewiewType));
  });

  const updateFeedback = (feedbackType) => {
    setRewiewType({
      ...rewiewType,
      [feedbackType]: rewiewType[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
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
        resetFeedback={resetFeedback}
        isShown={totalFeedback > 0}
      />
      <Feedback
        rewiewType={rewiewType}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
        hasFeedback={hasFeedback}
      />
      {totalFeedback < 0 && <Notification />}
    </>
  );
}
