import React from "react";
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/profile/:username" element={<Profile/>}>
        </Route>
      </Routes>
    </Router>
    );
}

export default App;
