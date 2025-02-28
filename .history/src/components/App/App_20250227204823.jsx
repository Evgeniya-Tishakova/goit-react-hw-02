import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";

export default function App() {
  useState();

  return (
    <>
      <Description />
      <Feedback />
      <Options />
    </>
  );
}
