import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Component, ReactNode } from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import News from './pages/News';
import FAQ from './pages/FAQ';

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      let msg = this.state.error?.message || 'Something went wrong.';
      try {
        const p = JSON.parse(msg);
        if (p.error) msg = `Firebase Error: ${p.error} (${p.operationType})`;
      } catch {}
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
            <h2 className="text-2xl font-black tracking-tighter uppercase text-red-500">Error</h2>
            <p className="text-gray-600">{msg}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-orange-500 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Terms() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
          >
            Terms & Conditions
          </motion.h1>
          <div className="prose prose-lg text-gray-600">
            <p>Welcome to LIKELION US. By using our website, you agree to the following terms and conditions.</p>
            <p>This is a placeholder for the actual terms and conditions content.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Privacy() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
          >
            Privacy Policy
          </motion.h1>
          <div className="prose prose-lg text-gray-600">
            <p>Your privacy is important to us. This policy explains how we collect and use your information.</p>
            <p>This is a placeholder for the actual privacy policy content.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/community" element={<Community />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
