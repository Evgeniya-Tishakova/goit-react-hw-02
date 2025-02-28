import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import { useEffect, useState } from "react";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [rewiewType, setRewiewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let totalFeedback = 0;

  useEffect(() => {
    totalFeedback = rewiewType.bad + rewiewType.neutral + rewiewType.good;
  }, [rewiewType]);

  const updateFeedback = (key) => {
    setRewiewType({
      ...rewiewType,
      [key]: rewiewType[key] + 1,
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
      {totalFeedback > 0 && (
        <Feedback rewiewType={rewiewType} totalFeedback={totalFeedback} />
      )}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}
