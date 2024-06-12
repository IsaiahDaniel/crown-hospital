import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<h3>NotFound</h3>} />
      </Routes>
    </Router>
  );
};

export default App;