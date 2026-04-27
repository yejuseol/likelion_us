import { motion } from 'motion/react';
import { Users, BookOpen, Rocket } from 'lucide-react';
import { useStorageImage, FALLBACK_COMMUNITY } from '../data/photos';

const stats = [
  { label: '13', unit: 'Years', value: 'Since we started', icon: <BookOpen size={20} /> },
  { label: '14,000+', unit: '', value: 'Students graduated', icon: <Users size={20} /> },
  { label: '1,800+', unit: '', value: 'Services provided', icon: <Rocket size={20} /> },
];

const universities = [
  'Auburn University', 'University of San Francisco', 'Georgia Gwinnett College', 'Oregon State University',
  'San Jose State University', 'University of Florida', 'Stanford University', 'University of Wisconsin-Madison',
  'Texas A&M University', 'University of California, Berkeley', 'University of Minnesota', 'George Washington University',
  'University of California, Santa Barbara', 'Carnegie Mellon University', 'Illinois Institute of Technology',
  'Santa Monica College', 'Northeastern University', 'Johns Hopkins University', 'Orange Coast College',
  'University of California, Los Angeles', 'Diablo Valley College', 'University of Illinois at Urbana-Champaign',
  'University of California, San Diego', 'Cincinnati State Technical and Community College', 'New York University',
  'Guttman Community College', 'CSUSB', 'Boston University', 'University of Hawaii at Manoa',
  'California State University, Long Beach', 'Michigan State University', 'University of California, Irvine',
  'University of California, Davis', 'University of Washington', 'Syracuse University',
  'Georgia Institute of Technology', 'University of California, Riverside', 'University of Notre Dame',
];

const universityPins = [
  { name: 'Auburn', x: 72, y: 68 },
  { name: 'Bay Area (UCB, Stanford, USF, SJSU)', x: 8, y: 48 },
  { name: 'SoCal (UCLA, UCSD, UCI, UCR, CSULB, SMC)', x: 12, y: 65 },
  { name: 'Oregon State', x: 10, y: 25 },
  { name: 'Florida', x: 82, y: 82 },
  { name: 'UW Madison', x: 62, y: 32 },
  { name: 'Texas A&M', x: 52, y: 78 },
  { name: 'Minnesota', x: 58, y: 28 },
  { name: 'DC/MD (GWU, JHU)', x: 85, y: 42 },
  { name: 'PA (CMU)', x: 80, y: 40 },
  { name: 'IL (IIT, UIUC)', x: 65, y: 44 },
  { name: 'MA (Northeastern, BU)', x: 92, y: 30 },
  { name: 'NY (NYU, Syracuse, Guttman)', x: 88, y: 34 },
  { name: 'OH (Cincinnati)', x: 72, y: 46 },
  { name: 'MI (MSU)', x: 70, y: 35 },
  { name: 'WA (UW)', x: 12, y: 15 },
  { name: 'GA (GT, GGC)', x: 78, y: 65 },
  { name: 'IN (Notre Dame)', x: 68, y: 40 },
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
            <img
              src={aboutImage}
              alt="Community"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Map */}
            <div className="relative order-2 md:order-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="relative w-full aspect-[1.6/1] bg-gray-50 rounded-2xl overflow-hidden">
                <svg viewBox="0 0 1000 600" className="w-full h-full opacity-20">
                  <path
                    d="M100,150 L150,140 L200,135 L300,145 L400,135 L500,145 L600,135 L700,145 L800,135 L850,130 L880,140 L900,160 L910,200 L920,250 L930,300 L920,350 L900,400 L880,450 L850,480 L820,520 L800,550 L780,570 L750,560 L700,540 L650,530 L600,540 L550,550 L500,560 L450,550 L400,540 L350,530 L300,520 L250,510 L200,500 L150,480 L120,450 L100,400 L90,350 L80,300 L90,250 L100,200 Z"
                    className="fill-gray-400"
                  />
                </svg>
                {universityPins.map((pin, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.04, type: 'spring' }}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute group cursor-pointer z-20"
                  >
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.7)] ring-2 ring-orange-500/20" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                      {pin.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center space-x-2">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Active Chapters</span>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Nationwide</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">LIKELION<br />across the U.S.</h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                As a part of the global LIKELION network, LIKELION US connects regional chapters through shared programs and experience. Each chapter operates independently while staying aligned with the overall direction of the network. We believe that wherever we are, our passion continues — and that passion becomes the connection that brings us together.
              </p>
            </div>
          </div>
        </div>

        {/* University Ticker — all black */}
        <div className="relative flex overflow-x-hidden py-6 bg-white border-y border-gray-100">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 80, ease: 'linear' } }}
            className="flex whitespace-nowrap items-center"
          >
            {[...universities, ...universities].map((uni, index) => (
              <div key={`${uni}-${index}`} className="mx-8 flex items-center">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-black hover:text-orange-500 transition-colors cursor-default">
                  {uni}
                </span>
                <span className="ml-8 text-orange-500">•</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>
    </div>
  );
}
