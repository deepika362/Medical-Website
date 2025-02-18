// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./dashboard";
import StudentLogin from "./student-login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/dashboard" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
