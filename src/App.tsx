import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ModernBackground from './components/ModernBackground';
import ProtectedRoute from './components/ProtectedRoute';
import NewHome from './pages/NewHome';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SpecifiedCommercialTransactionAct from './pages/SpecifiedCommercialTransactionAct';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { initializeGoogleTracking } from './lib/googleTracking';

function App() {
  useEffect(() => {
    initializeGoogleTracking();
  }, []);

  return (
    <ModernBackground>
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/specified-commercial-transaction-act" element={<SpecifiedCommercialTransactionAct />} />

          {/* Admin Routes */}
          <Route path="/admin-secure-panel" element={<AdminLogin />} />
          <Route
            path="/admin-secure-panel/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </ModernBackground>
  );
}

export default App;
