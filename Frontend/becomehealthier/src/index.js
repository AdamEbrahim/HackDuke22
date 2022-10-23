import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/LayOut/Layout";
import Home from "./Pages/Homee/Homee";
import Nutrition from "./Pages/Nutrition/Nutrition";
import WorkOuts from "./Pages/WorkOuts/WorkOuts";
import NoPage from "./Pages/NoPage";
import Navbar from "./Components/navbar";

export default function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="Nutrition" element={<Nutrition />} />
          <Route path="WorkOuts" element={<WorkOuts />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);