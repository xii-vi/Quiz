import { Navbar } from "./components/navbar/navbar";
import "./index.css"
import { Homepage,RulesPage } from "./pages";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="rules-page" element={<RulesPage />} />
      </Routes>
    </div>
  );
}

export default App;
