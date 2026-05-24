import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Users, GraduationCap, Globe2, ArrowRight, Mail, Calendar, Handshake } from 'lucide-react';
import { intro, coreAreas, kTechPosters, CoreArea } from '../data/whatwedo';

const iconFor: Record<CoreArea['slug'], React.ReactNode> = {
  community: <Users size={26} className="text-orange-500" />,
  education: <GraduationCap size={26} className="text-orange-500" />,
  ecosystem: <Globe2 size={26} className="text-orange-500" />,
};

export default function WhatWeDo() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">About → What We Do</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              What We Do
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* 3 Core Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Our 3 Core Areas</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              Community · Education · Ecosystem
            </h2>
          </div>

          <div className="space-y-4">
            {coreAreas.map((area) => {
              const isOpen = openId === area.id;
              return (
                <motion.div
                  key={area.id}
                  layout
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : area.id)}
                    className="w-full p-8 flex items-start justify-between text-left gap-6"
                  >
                    <div className="flex items-start gap-6 flex-1 min-w-0">
                      <div className="hidden md:flex w-12 h-12 rounded-2xl bg-orange-50 items-center justify-center flex-shrink-0">
                        {iconFor[area.slug]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-300 mb-2">{area.id}</p>
                        <h3 className={`text-2xl md:text-3xl font-black tracking-tight uppercase transition-colors ${
                          isOpen ? 'text-orange-500' : 'text-black'
                        }`}>
                          {area.title}
                        </h3>
                      </div>
                    </div>
                    <div className={`p-2.5 rounded-full transition-colors flex-shrink-0 ${
                      isOpen ? 'bg-orange-500 text-white' : 'bg-gray-50 text-gray-400'
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-10 md:pl-26 space-y-8">
                          <p className="text-gray-600 leading-relaxed">{area.description}</p>

                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Key Activities</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {area.activities.map((act) => (
                                <div key={act} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                  <span>{act}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* K-Tech Pioneers showcase under Ecosystem */}
                          {area.hasShowcase && (
                            <div className="pt-6 border-t border-gray-100">
                              <div className="flex items-center justify-between mb-5">
                                <div>
                                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-1">Featured Initiative</p>
                                  <h4 className="text-xl font-black tracking-tight uppercase">K-Tech Pioneers</h4>
                                </div>
                              </div>
                              {kTechPosters.length === 0 ? (
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 text-center border border-dashed border-orange-200">
                                  <p className="text-sm font-bold text-orange-700 mb-1">Poster gallery coming soon</p>
                                  <p className="text-xs text-orange-600/70">Instagram posters from recent K-Tech Pioneers events will be shown here.</p>
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                  {kTechPosters.map((src, i) => (
                                    <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                                      <img src={src} alt={`K-Tech Pioneers ${i + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Want to get involved?</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              Join Our Community,<br />Or Explore Programs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Users size={20} />, label: 'Join the Community', desc: 'Become a member', to: '/community' },
              { icon: <Handshake size={20} />, label: 'Partner with Us', desc: 'Build together', to: '/partners' },
              { icon: <Calendar size={20} />, label: 'View Events', desc: 'See what\'s next', to: '/news' },
              { icon: <Mail size={20} />, label: 'Contact Us', desc: 'Get in touch', to: '/contact' },
            ].map((cta) => (
              <Link
                key={cta.label}
                to={cta.to}
                className="group p-6 bg-gray-50 hover:bg-black rounded-3xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-white group-hover:bg-orange-500 flex items-center justify-center text-orange-500 group-hover:text-white transition-all mb-4">
                  {cta.icon}
                </div>
                <p className="text-sm font-black uppercase tracking-tight text-black group-hover:text-white transition-colors mb-1">
                  {cta.label}
                </p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors flex items-center gap-1">
                  {cta.desc}
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
