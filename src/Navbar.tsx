import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import AuthModal from './AuthModal';

const navLinks = [
  { name: 'About Us', path: '/' },
  { name: 'Community', path: '/community' },
  { name: 'News & Events', path: '/news' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try { await signOut(auth); } catch (e) { console.error(e); }
  };

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black uppercase">
              LIKELION US
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === link.path ? 'text-orange-500' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-4 w-px bg-gray-200 mx-2" />
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm font-bold text-black uppercase tracking-tighter">
                    <User size={16} />
                    <span>{user.displayName?.split(' ')[0] || 'Member'}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => openAuth('login')}
                  className="bg-black text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 transition-all"
                >
                  Log In
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {user && <User size={20} />}
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-black">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-medium border-b border-gray-50 last:border-none ${
                      location.pathname === link.path ? 'text-orange-500' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  {user ? (
                    <button onClick={handleLogout} className="w-full text-left px-3 py-4 text-base font-medium text-gray-400">
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => openAuth('login')}
                      className="block w-full text-center bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
                    >
                      Log In
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
