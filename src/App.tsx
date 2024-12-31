import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src="/logo.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1
        style={{
          fontFamily: "Aleo-Italic",
        }}
      >
        {" "}
        Ilubio Lab
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>WELCOME</button>
      </div>
    </>
  );
}

export default App;
