import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import { useState } from "react";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [rewiewType, setRewiewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = good + neutral + bad;

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
      <Options updateFeedback={updateFeedback} reset={reset} />
      <Feedback rewiewType={rewiewType} />
      <Notification />
    </>
  );
}
