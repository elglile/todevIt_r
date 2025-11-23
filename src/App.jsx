import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OurProjects from './pages/OurProjects'
import ServiceDetails from './pages/ServiceDetails'
import ContactForm from './pages/ContactForm'
import Contact from './pages/Contact'
import { Navigate, useLocation } from 'react-router'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
function App() {
        const { pathname } = useLocation();
    const { scrollYProgress } = useScroll()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    zIndex: 9999,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#5527fdff",
                }}
            />
      <Header />
      <main className="min-h-screen">
            <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:title" element={<PageTransition><ServiceDetails /></PageTransition>} />

          <Route path="/ourprojects" element={<PageTransition><OurProjects /></PageTransition>} />
          <Route path="/contact" element={<><PageTransition><Contact /></PageTransition></>} />
          <Route path="*" element={<><PageTransition><Navigate to={"/"}/></PageTransition></>} />

        </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
