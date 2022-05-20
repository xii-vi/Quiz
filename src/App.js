import { Navbar } from "./components/navbar/navbar";
import "./index.css"
import { Homepage,QuizQuestion,RulesPage } from "./pages";
import {Routes,Route} from "react-router-dom"
import { ResultPage } from "./pages/result/resultPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="rules-page" element={<RulesPage />} />
      <Route path="quiz" element={<QuizQuestion />} />
      <Route path="result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
