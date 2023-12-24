import './App.css';
import React from "react";
import NavBar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";
 
function App() {
    return (
        <div className='background'>
            <Router>
                <NavBar dark="true" />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route
                        path="/sign-up"
                        element={<SignUp />}
                    /> */}
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;