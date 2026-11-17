import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import EmployeeList from "./EmployeeList/EmployeeList";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;