import { Navbar } from "./components/navbar/navbar";
import "./index.css"
import { Homepage,QuizQuestion,RulesPage,Login,Signup,RequireAuth,ResultPage, ErrorPage } from "./pages";
import {Routes,Route} from "react-router-dom"
import { useTheme } from "./context/themeContext";
import { ScrollToTop } from "./components/scrollToTop";
function App() {
  const {theme} = useTheme();
  return (
    <div className= {theme === "light" ? "bg-white" : "bg-slate-900 text-slate-50"}>
      <ScrollToTop />
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
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
