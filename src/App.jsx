import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Myweek from "./pages/Myweek";
import ProtectedRoute from "./pages/Protectedroute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myweek" element={
          <ProtectedRoute>
            <Myweek />
          </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App
