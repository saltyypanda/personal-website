import './App.css';
import React from "react";
import NavBar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import Resume from './pages/Resume';
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";
 
function App() {
    return (
        <div className='background'>
            <Router>
                <div className='w-75 mx-auto'>
                    <NavBar color="transparent" dark="true" className="pt-5 mb-5"/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/resume" element={<Resume />} />
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
                </div>
            </Router>
        </div>
    );
}
 
export default App;