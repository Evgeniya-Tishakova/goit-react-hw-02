import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";

export default function App() {
  const [rewiewType, setRewiewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handle() {}
  return (
    <>
      <Description />
      <Feedback items={rewiewType} />
      <Options handle={handle} />
    </>
  );
}
