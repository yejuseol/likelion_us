import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <img src="./logo-white.svg" alt="LIKELION US" className="h-5 w-auto" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mt-4">
              From Possibility to Reality. A global student community for technology education.
            </p>
            <div className="flex space-x-3">
              {[
                { href: 'https://www.instagram.com/likelion.us', icon: <Instagram size={18} /> },
                { href: 'https://www.linkedin.com/company/likelionus/', icon: <Linkedin size={18} /> },
                { href: 'https://www.facebook.com/likelion.us/', icon: <Facebook size={18} /> },
                { href: 'https://www.youtube.com/@likelionus', icon: <Youtube size={18} /> },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'About Us' },
                { to: '/community', label: 'Community' },
                { to: '/news', label: 'News & Events' },
                { to: '/faq', label: 'FAQ' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact</h4>
            <a
              href="mailto:simba@likelion.net"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-orange-500 transition-colors font-medium"
            >
              <Mail size={14} />
              <span>simba@likelion.net</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 LIKELION US. All rights reserved.</p>
          <p className="text-xs text-gray-600">Palo Alto, CA · United States</p>
        </div>
      </div>
    </footer>
  );
}
