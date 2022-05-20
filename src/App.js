import { Navbar } from "./components/navbar/navbar";
import "./index.css"
import { Homepage,QuizQuestion,RulesPage,Login,Signup,RequireAuth } from "./pages";
import {Routes,Route} from "react-router-dom"
import { ResultPage } from "./pages/result/resultPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route element={<RequireAuth />}>
      <Route path="rules-page" element={<RulesPage />} />
      <Route path="quiz" element={<QuizQuestion />} />
      <Route path="result" element={<ResultPage />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
