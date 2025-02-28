import { useEffect, useState } from "react";

import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const saveRewiew = JSON.parse(localStorage.getItem("current-effect"));
  console.log(saveRewiew);
  // if (saveRewiew !== null) {
  //   setRewiewType(JSON.parse(saveRewiew));
  // }
  const [rewiewType, setRewiewType] = useState(
    () =>
      saveRewiew || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  // const saveRewiew = localStorage.getItem("current-effect");

  // if (saveRewiew !== null) {
  //   setRewiewType(JSON.parse(saveRewiew));
  // }

  const totalFeedback = rewiewType.good + rewiewType.neutral + rewiewType.bad;

  const positiveFeedback = Math.round((rewiewType.good / totalFeedback) * 100);

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
      {totalFeedback > 0 && (
        <Feedback
          rewiewType={rewiewType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}
