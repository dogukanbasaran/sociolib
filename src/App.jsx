import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Library from "./pages/Library";

// COMPONENTS

import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/library" element={<Library/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
