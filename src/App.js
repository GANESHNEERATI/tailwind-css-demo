import { useState } from "react";

const { default: Card } = require("./Components/Card");

function App() {
  const [text1, settext1] = useState(
    "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage, and going throughthe cites of the word in classical literature, discovered theundoubtable source."
  );
  const [text2, settext2] = useState(
    "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, "
  );
  const [text3, settext3] = useState(
    "Contrary to popular belief, Lorem Ipsum is not simply random text.  "
  );

  return (
    <div className="bg-gray-100">
      <section className="flex justify-between ">
        <Card text={text1} />
        <Card text={text2} />
        <Card text={text3} />
      </section>
    </div>
  );
}

export default App;
