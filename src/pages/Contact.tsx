import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Mail, Instagram, Linkedin } from 'lucide-react';

// TODO: replace with real Google Form URL (optional)
const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/REPLACE_ME/viewform';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Until Google Form is connected, open mailto so messages aren't lost.
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.email}`);
    window.location.href = `mailto:simba@likelion.net?subject=${encodeURIComponent('Contact from LIKELION US site')}&body=${body}`;
    setTimeout(() => { setSubmitted(true); setSubmitting(false); }, 500);
  };

  const inputClass = 'w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors bg-transparent';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Contact</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              How Can We<br />Help You?
            </h1>
            <p className="text-gray-500 mt-6 text-sm md:text-base">
              Send us a quick note and we'll get back to you within a few days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 space-y-3">
              <CheckCircle size={48} className="text-green-500 mx-auto" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Thanks!</h3>
              <p className="text-sm text-gray-500">Your email client should have opened with the message. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 space-y-6 border border-gray-100 shadow-sm">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="your@email.com" className={inputClass} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message *</label>
                <textarea required name="message" rows={6} value={formData.message} onChange={handleChange}
                  placeholder="Tell us what's on your mind…"
                  className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                <Send size={16} />
                <span>{submitting ? 'Sending…' : 'Submit'}</span>
              </button>
            </form>
          )}

          {/* Direct channels */}
          <div className="mt-10 text-center space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Or reach us directly</p>
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:simba@likelion.net" className="flex items-center gap-2 text-sm font-bold text-black hover:text-orange-500 transition-colors">
                <Mail size={15} /><span>simba@likelion.net</span>
              </a>
              <span className="text-gray-200">·</span>
              <a href="https://www.instagram.com/likelion_us" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/likelionus/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-orange-500 transition-colors inline-flex items-center gap-1 mt-4"
              style={{ display: CONTACT_FORM_URL.includes('REPLACE_ME') ? 'none' : 'inline-flex' }}
            >
              Open Google Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
