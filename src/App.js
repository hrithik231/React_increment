import "./styles.css";
import { useState } from "react";
function App() {
  const [data, setdata] = useState(0);
  function change() {
    setdata(data + 1);
  }
  function change2() {
    if (data > 0) {
      setdata(data - 1);
    }
  }
  return (
    <>
      <h1 className="heading">increment count</h1>
      <div className="fun">
        <h1>{data}</h1>
        <button onClick={change} className="btn1">
          like
        </button>
        <button onClick={change2} className="btn2">
          Disike
        </button>
      </div>
    </>
  );
}
export default App;
