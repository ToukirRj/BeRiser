import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Scrollto from './layout/Scrollto';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;



}

function App() {
    useEffect(() => {
        const handleScroll = (e) => {
          e.preventDefault(); // Prevent the default scrolling behavior
    
          const deltaY = e.deltaY;
    
          // Adjust the scroll distance as needed
          window.scrollBy({
            top: deltaY * 4.5, // Experiment with different values
            behavior: 'smooth',
          });
        };
    
        document.body.addEventListener('wheel', handleScroll, { passive: false });
    
        return () => {
          // Cleanup: remove event listener when the component unmounts
          document.body.removeEventListener('wheel', handleScroll);
        };
      }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
                <Scrollto />
                <ScrollToTop />
            </BrowserRouter>
        </>
    );
}

export default App;
