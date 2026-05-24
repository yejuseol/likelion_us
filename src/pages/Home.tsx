import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { useStorageImage, FALLBACK_HERO } from '../data/photos';
import { networks } from '../data/globalNetwork';
import { partners, tierLabels, PartnerTier } from '../data/partners';
import { lionUpApplyUrl } from '../data/lionup';

export default function Home() {
  const heroImage = useStorageImage('images/hero-bg.jpg', FALLBACK_HERO);

  // Group partners by tier
  const groupedPartners = (['strategic', 'partner', 'community'] as PartnerTier[])
    .map(tier => ({ tier, label: tierLabels[tier], items: partners.filter(p => p.tier === tier) }))
    .filter(g => g.items.length > 0);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter uppercase leading-[0.9]">
              POSSIBILITY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TO REALITY</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl mx-auto">
              Building today's nearest tomorrow — for everyone who wants to learn, create, and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/community"
              className="group inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-orange-500/30">
              <span>Explore Community</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/what-we-do"
              className="inline-flex items-center space-x-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300">
              <span>What We Do</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Global Network — with new-tab links */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Worldwide</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Global Network</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              A global community that connects universities across three countries — learning that begins on each campus extends beyond borders.
            </p>
          </motion.div>

          <div className="space-y-6">
            {networks.map((network, index) => (
              <motion.a
                key={network.country}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block bg-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">0{index + 1}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                      {network.country}
                      <ExternalLink size={14} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-gray-500 leading-relaxed text-sm">{network.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Lion-Up CTA section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-orange-500 blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={12} /> Featured Program
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                Lion-Up<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  for Companies
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Partner with universities and student teams on real projects.
                A simple application connects your company with motivated builders
                across our nationwide network.
              </p>
              <p className="text-sm text-gray-400">
                Inquiries: <a href="mailto:simba@likelion.net" className="text-orange-400 font-bold hover:underline">simba@likelion.net</a>
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <a
                href={lionUpApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-orange-500/20 ${
                  lionUpApplyUrl.includes('REPLACE_ME')
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-white hover:text-black'
                }`}
                onClick={(e) => {
                  if (lionUpApplyUrl.includes('REPLACE_ME')) {
                    e.preventDefault();
                    alert('Application form coming soon. Email simba@likelion.net for now.');
                  }
                }}
              >
                <span>Apply for Lion-Up</span>
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-gray-500 md:text-right">
                {lionUpApplyUrl.includes('REPLACE_ME')
                  ? '⚠ Google Form URL pending — placeholder active'
                  : 'Opens in new tab'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Trusted By</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Our Partners</h2>
            <p className="text-gray-500 mt-3 text-sm">
              Companies and institutions building the future with us.
            </p>
          </div>

          {groupedPartners.length === 0 ? (
            // Placeholder when no partners are added yet
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-dashed border-gray-200 flex items-center justify-center"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    Logo
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {groupedPartners.map((group) => (
                <div key={group.tier}>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 text-center">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {group.items.map((partner) => {
                      const Inner = (
                        <div className="aspect-[3/2] rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-4 hover:border-orange-300 hover:shadow-md transition-all grayscale hover:grayscale-0">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      );
                      return partner.link ? (
                        <a
                          key={partner.name}
                          href={partner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {Inner}
                        </a>
                      ) : (
                        <div key={partner.name}>{Inner}</div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/partners"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Become a Partner <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
