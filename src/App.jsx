import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/Authcontext.jsx";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hero" element={<Hero />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
