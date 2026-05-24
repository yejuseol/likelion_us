import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Building2, Users, Lightbulb, Briefcase, Mail } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// TODO: replace with real Google Form URL (optional alternative)
const PARTNER_FORM_URL = 'https://docs.google.com/forms/d/REPLACE_ME/viewform';

const opportunities = [
  {
    icon: <Briefcase size={22} />,
    title: 'Recruitment Collaboration',
    desc: 'Reach top student talent across our nationwide network and build your employer brand.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Co-host Hackathons & Events',
    desc: 'Sponsor or design challenges with us — connect your tech and people with student builders.',
  },
  {
    icon: <Users size={22} />,
    title: 'Technology & Content Partnership',
    desc: 'Showcase your products, APIs, or learning content within our community programs.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Brand & Community Exposure',
    desc: 'Get visibility through our channels, newsletters, and on-the-ground events nationwide.',
  },
];

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    name: '', organization: '', email: '', interest: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      // Save to Firestore — view at Firebase Console → Firestore → partnerInquiries
      await addDoc(collection(db, 'partnerInquiries'), {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        interest: formData.interest,
        message: formData.message,
        createdAt: serverTimestamp(),
        source: 'website-partner',
        userAgent: navigator.userAgent,
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error('Partner submit error:', err);
      setError('Could not submit. Please email simba@likelion.net directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = 'w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors bg-transparent';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">Partnership</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Partner<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">With Us</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl"
          >
            Companies, universities, and organizations — let's build the next generation of tech talent together.
          </motion.p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Partnership Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-7 rounded-3xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-5">
                  {opp.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight uppercase mb-2">{opp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{opp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Let's Talk</h2>
            <p className="text-gray-500 mt-4 text-sm">Fill out the form and our team will get back to you within a few days.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 space-y-3">
              <CheckCircle size={48} className="text-green-500 mx-auto" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Thanks!</h3>
              <p className="text-sm text-gray-500">Your inquiry has been received. Our team will reach out within a few days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 space-y-6 border border-gray-100 shadow-sm">
              {error && <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Organization *</label>
                  <input required name="organization" value={formData.organization} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interest *</label>
                <select required name="interest" value={formData.interest} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select one…</option>
                  <option value="recruitment">Recruitment / Employer Branding</option>
                  <option value="hackathon">Co-host Hackathon / Event</option>
                  <option value="technology">Technology / Content Partnership</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message *</label>
                <textarea required name="message" rows={5} value={formData.message} onChange={handleChange}
                  className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                <Send size={16} />
                <span>{submitting ? 'Sending...' : 'Submit Inquiry'}</span>
              </button>

              <p className="text-center text-xs text-gray-400 pt-2">
                Or email us directly at{' '}
                <a href="mailto:simba@likelion.net" className="font-bold text-orange-500 hover:underline">
                  simba@likelion.net
                </a>
              </p>
            </form>
          )}

          {/* Alternate: link to external Google Form when ready */}
          <div className="mt-6 text-center">
            <a
              href={PARTNER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-orange-500 transition-colors inline-flex items-center gap-1"
              style={{ display: PARTNER_FORM_URL.includes('REPLACE_ME') ? 'none' : 'inline-flex' }}
            >
              <Mail size={11} /> Open partnership form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
