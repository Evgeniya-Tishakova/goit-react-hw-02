import transactions from "../transactions.json";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";

export default function App() {
  return (
    <>
      <Description />
      <Feedback { good, neutral, bad, total, positive } />
      <Options items={} />
    </>
  );
}
