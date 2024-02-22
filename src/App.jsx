import { Route, Routes } from "react-router-dom";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuestionBox/>} />
        <Route path="/Result/:local" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
