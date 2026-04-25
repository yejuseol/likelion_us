import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
            LIKELION US
          </Link>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</h4>
            <a href="mailto:simba@likelion.net" className="text-sm font-medium hover:text-orange-500 transition-colors">
              simba@likelion.net
            </a>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Follow</h4>
            <div className="flex space-x-4">
              {[
                { href: 'https://www.instagram.com/likelion.us', icon: <Instagram size={20} /> },
                { href: 'https://www.linkedin.com/company/likelionus/', icon: <Linkedin size={20} /> },
                { href: 'https://www.facebook.com/likelion.us/', icon: <Facebook size={20} /> },
                { href: 'https://www.youtube.com/@likelionus', icon: <Youtube size={20} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'About Us' },
                { to: '/community', label: 'Community' },
                { to: '/news', label: 'News & Events' },
                { to: '/faq', label: 'FAQ' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm font-medium hover:text-orange-500 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-sm font-medium hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm font-medium hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-xs text-gray-400 font-medium">© 2026 LIKELION US. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
