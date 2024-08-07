import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Bookshelf from './Bookshelf';
import Blog from './Blog';
import Notepad from './Notepad';
import FadeIn from './FadeIn';
import styles from '../App.module.css'

function App() {
    return (
        <Router>
            <div className = {styles.app}>
                <Header />
                <Navigation />
                <main className = {styles.main}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/about" />} />
                        <Route path="/about" element={<FadeIn><About /></FadeIn>} />
                        <Route path="/projects" element={<FadeIn><Projects /></FadeIn>} />
                        <Route path="/bookshelf" element={<FadeIn><Bookshelf /></FadeIn>} />
                        <Route path="/blog" element={<FadeIn><Blog /></FadeIn>} />
                        <Route path="/notepad" element={<FadeIn><Notepad /></FadeIn>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;