import { motion } from 'motion/react';
import { Users, BookOpen, Rocket, Mail, Instagram, ArrowRight, FileText } from 'lucide-react';
import { useStorageImage, FALLBACK_COMMUNITY } from '../data/photos';
import { schools } from '../data/schools';
import { communityStats } from '../data/stats';
import { lionUpProjects, lionUpContactEmail, lionUpApplyUrl } from '../data/lionup';

const stats = [
  { label: communityStats.yearsActive, value: communityStats.yearsLabel, icon: <BookOpen size={20} /> },
  { label: communityStats.studentsGraduated, value: communityStats.studentsLabel, icon: <Users size={20} /> },
  { label: communityStats.servicesProvided, value: communityStats.servicesLabel, icon: <Rocket size={20} /> },
];

export default function Community() {
  const aboutImage = useStorageImage('images/community-about.jpg', FALLBACK_COMMUNITY);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Our Community</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Where Builders<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Learn, Build,</span><br />
              and Belong.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-orange-500 mb-4">{stat.icon}</div>
                <div className="text-4xl font-black tracking-tighter mb-1">{stat.label}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">About Us</h2>
            </div>
            <div className="space-y-5 text-gray-500 leading-relaxed text-sm">
              <p>LIKELION began as a university-based program in Korea. It has grown into a broader community connecting students and startup builders all over the world. LIKELION previously operated through structured cohorts from 1st to 5th, yet the community has expanded beyond a single school or system.</p>
              <p>Now, we started to function as an open community, welcoming participants who want to learn, build, and collaborate through shared interests in technology and startups.</p>
              <p>Members from various schools and backgrounds, LIKELION US is still growing. It never hesitates to give positive influence to passionate students.</p>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl" />
            <img src={aboutImage} alt="Community"
              className="relative rounded-3xl shadow-2xl w-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Map Section — 56 schools */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="relative w-full aspect-[5/3] bg-gray-50 rounded-2xl overflow-hidden">
                {/* US continental outline — wider on west coast & Florida to encompass all schools */}
                <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {/* Continental US */}
                  <path
                    d="M 130,90 L 122,135 L 115,170 L 118,210 L 115,255 L 122,290 L 130,310 L 145,335 L 165,360 L 185,385 L 210,402 L 217,420 L 280,425 L 320,440 L 380,437 L 440,460 L 480,485 L 525,498 L 555,490 L 600,485 L 620,498 L 650,488 L 690,485 L 745,485 L 750,510 L 765,540 L 778,565 L 790,572 L 793,545 L 795,510 L 793,478 L 803,455 L 820,425 L 838,400 L 862,385 L 833,365 L 848,355 L 858,330 L 882,308 L 905,285 L 920,260 L 920,235 L 935,210 L 955,170 L 940,150 L 920,140 L 870,138 L 830,148 L 780,158 L 740,170 L 720,175 L 705,180 L 715,158 L 700,140 L 660,150 L 615,142 L 575,135 L 540,125 L 480,115 L 410,108 L 340,105 L 270,100 L 200,95 Z"
                    className="fill-gray-200"
                  />
                  {/* Hawaii inset box (bottom-left corner) */}
                  <rect x="100" y="535" width="140" height="55" rx="6" className="fill-gray-200" />
                  <text x="170" y="588" textAnchor="middle" className="fill-gray-400 text-[9px] font-bold uppercase tracking-widest">Hawaii</text>
                </svg>

                {/* School pins (positioned by %) */}
                {schools.map((school, i) => (
                  <motion.div
                    key={`${school.name}-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: Math.min(i * 0.015, 1.5), type: 'spring', stiffness: 200 }}
                    style={{ left: `${school.x}%`, top: `${school.y}%` }}
                    className="absolute group cursor-pointer z-20"
                  >
                    <div className="w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)] ring-2 ring-white hover:scale-150 transition-transform" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-30">
                      {school.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{schools.length} Participating Schools</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Nationwide</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">LIKELION<br />across the U.S.</h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                As a part of the global LIKELION network, LIKELION US connects regional chapters through shared programs and experience.
                Each chapter operates independently while staying aligned with the overall direction of the network.
                Wherever we are, our passion continues — and that passion becomes the connection that brings us together.
              </p>
            </div>
          </div>
        </div>

        {/* University Ticker — all black */}
        <div className="relative flex overflow-x-hidden py-6 bg-white border-y border-gray-100">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 100, ease: 'linear' } }}
            className="flex whitespace-nowrap items-center"
          >
            {[...schools, ...schools].map((s, index) => (
              <div key={`${s.name}-${index}`} className="mx-8 flex items-center">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-black hover:text-orange-500 transition-colors cursor-default">
                  {s.name}
                </span>
                <span className="ml-8 text-orange-500">•</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Lion-Up Project Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Industry × University</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Lion-Up</h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              Lion-Up connects companies with university teams to build real projects together.
              Each project pairs a sponsoring company, a participating school, and a student team
              that ships real outcomes — not just demos.
            </p>
          </div>

          {/* Project cards */}
          {lionUpProjects.length === 0 ? (
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-12 text-center border border-dashed border-orange-200 mb-8">
              <p className="text-base font-bold text-orange-700 mb-2">Project showcase coming soon</p>
              <p className="text-sm text-orange-600/70 max-w-md mx-auto">
                Student team results from Lion-Up — shared via Instagram —
                will be displayed here as cards: Company × School × Project × Outcome.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {lionUpProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                >
                  {proj.thumbnail && (
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img src={proj.thumbnail} alt={proj.project}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500">
                      <span>{proj.company}</span>
                      <span className="text-gray-300">×</span>
                      <span>{proj.school}</span>
                    </div>
                    <h3 className="text-lg font-black tracking-tight">{proj.project}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{proj.result}</p>
                    {proj.instagramUrl && (
                      <a href={proj.instagramUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:underline">
                        <Instagram size={12} /> View on Instagram
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA — two options: Google Form (when ready) + Email */}
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Interested?</p>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
                Apply or get in touch
              </h3>
              <p className="text-sm text-gray-400 max-w-xl">
                Submit the Google Form once available, or email us directly at{' '}
                <a href={`mailto:${lionUpContactEmail}`} className="text-orange-400 font-bold hover:underline">
                  {lionUpContactEmail}
                </a>
                {' '}with the items from the application guide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Google Form button — placeholder until URL is provided */}
              <a
                href={lionUpApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (lionUpApplyUrl.includes('REPLACE_ME')) {
                    e.preventDefault();
                    alert('Application form coming soon. For now, please email simba@likelion.net.');
                  }
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg flex-shrink-0 ${
                  lionUpApplyUrl.includes('REPLACE_ME')
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer'
                    : 'bg-orange-500 text-white hover:bg-white hover:text-black shadow-orange-500/30'
                }`}
              >
                <FileText size={16} />
                <span>{lionUpApplyUrl.includes('REPLACE_ME') ? 'Apply Form (Coming Soon)' : 'Apply via Google Form'}</span>
                <ArrowRight size={14} />
              </a>
              {/* Email button — always works */}
              <a href={`mailto:${lionUpContactEmail}?subject=${encodeURIComponent('Lion-Up Inquiry')}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex-shrink-0">
                <Mail size={16} />
                <span>Email Simba</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
