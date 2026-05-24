import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User, ChevronDown, LogOut, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import AuthModal from './AuthModal';

interface NavItem {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    name: 'About',
    children: [
      { name: 'About Us', path: '/' },
      { name: 'What We Do', path: '/what-we-do' },
    ],
  },
  { name: 'Community', path: '/community' },
  { name: 'News & Events', path: '/news' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsOpen(false);
  };

  const isActive = (path?: string) => path && location.pathname === path;
  const isAboutActive = location.pathname === '/' || location.pathname === '/what-we-do';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md shadow-black/5' : 'bg-white/80 backdrop-blur-md'
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <Link to="/" className="flex items-center">
              <img src="./logo-color.svg" alt="LIKELION US" className="h-6 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.name} className="relative" ref={aboutRef}>
                      <button
                        onClick={() => setAboutOpen(!aboutOpen)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-full ${
                          isAboutActive ? 'text-orange-500' : 'text-gray-500 hover:text-black'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={13} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {aboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setAboutOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors ${
                                  isActive(child.path) ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors rounded-full ${
                      isActive(item.path) ? 'text-orange-500' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="w-px h-5 bg-gray-200 mx-2" />

              {user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center space-x-2 pl-3 pr-2 py-2 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-black">
                      {(user.displayName?.[0] || user.email?.[0] || 'M').toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-black">
                      {user.displayName?.split(' ')[0] || 'Member'}
                    </span>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden"
                      >
                        <Link to="/mypage" onClick={() => setProfileOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                          <Settings size={15} /><span>My Page</span>
                        </Link>
                        <button onClick={handleLogout}
                          className="flex items-center space-x-3 w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors border-t border-gray-50">
                          <LogOut size={15} /><span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => openAuth('login')}
                  className="ml-2 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 transition-all"
                >
                  Log In
                </button>
              )}
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center space-x-3">
              {user && (
                <Link to="/mypage">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-black">
                    {(user.displayName?.[0] || user.email?.[0] || 'M').toUpperCase()}
                  </div>
                </Link>
              )}
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-black">
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                            isAboutActive ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={14} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileAboutOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-4 py-2.5 text-sm font-medium ${
                                    isActive(child.path) ? 'text-orange-500' : 'text-gray-500'
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.path}
                      to={item.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive(item.path) ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  {user ? (
                    <button onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-50">
                      <LogOut size={15} /><span>Logout</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => openAuth('login')}
                      className="w-full bg-black text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors"
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
