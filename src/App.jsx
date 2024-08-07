import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import PodcastDetail from "./pages/PodcastDetail";
import SingleBlog from "./pages/SingleBlog";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/podcastdetail" element={<PodcastDetail />} />
                    <Route path="/singleblog" element={<SingleBlog />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
