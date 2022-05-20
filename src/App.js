import { Navbar } from "./components/navbar/navbar";
import "./index.css"
import { Homepage } from "./pages/homepage/homepage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
