import { useState } from "react";
import MainPage from "./views/MainPage";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container-fluid">
      <MainPage />
    </div>
  );
}

export default App;
