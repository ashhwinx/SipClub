import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import WorkshopsPage from './pages/WorkshopsPage';
import ContactPage from './pages/ContactPage';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null); // Lenis instance store karne ke liye

  // 1. Initialize Lenis (Run Only Once)
  useEffect(() => {
    // Browser ki default scroll restoration band kro
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis; // Store instance in ref

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // Empty dependency array = Only runs once on mount

  // 2. Handle Loading State
  useEffect(() => {
    if (loading) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [loading]);

  // 3. Handle Scroll Reset on Route Change (THE FIX)
  useEffect(() => {
    // Native browser scroll reset
    window.scrollTo(0, 0);
    
    // Lenis scroll reset (Force Immediate)
    if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]); // Trigger whenever path changes

  return (
      <main className="relative min-h-screen w-full bg-deep-matcha text-deep-matcha selection:bg-soft-sage selection:text-deep-matcha">
        <GrainOverlay />
        
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </>
        )}
      </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;