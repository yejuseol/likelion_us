import { motion } from 'motion/react';
import { Users, BookOpen, Rocket } from 'lucide-react';
import { communityAboutImage } from '../data/photos';

const stats = [
  { label: '13 years', value: 'Since we started', icon: <BookOpen size={24} /> },
  { label: '14,000 +', value: 'Students graduated', icon: <Users size={24} /> },
  { label: '1,800 +', value: 'Services provided', icon: <Rocket size={24} /> },
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
  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            Where Builders Learn,<br />Build, and Belong.
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="text-orange-500 mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-4xl font-black tracking-tighter mb-2">{stat.label}</h3>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">About Us</h2>
            <div className="w-20 h-2 bg-orange-500"></div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>LIKELION began as a university-based program in Korea. It has grown into a broader community connecting students and startup builders all over the world. LIKELION previously operated through structured cohorts from 1st to 5th, yet the community has expanded beyond a single school or system.</p>
              <p>Now, we started to function as an open community, welcoming participants who want to learn, build, and collaborate through shared interests in technology and startups.</p>
              <p>Members from various schools and backgrounds, LIKELION US is still growing. It never hesitates to give positive influence to passionate students.</p>
            </div>
          </div>
          <div className="relative">
            <img src={communityAboutImage} alt="Community Hackathon" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="relative w-full aspect-[1.6/1] bg-gray-50 rounded-xl overflow-hidden">
                <svg viewBox="0 0 1000 600" className="w-full h-full opacity-30">
                  <path
                    d="M100,150 L150,140 L200,135 L300,145 L400,135 L500,145 L600,135 L700,145 L800,135 L850,130 L880,140 L900,160 L910,200 L920,250 L930,300 L920,350 L900,400 L880,450 L850,480 L820,520 L800,550 L780,570 L750,560 L700,540 L650,530 L600,540 L550,550 L500,560 L450,550 L400,540 L350,530 L300,520 L250,510 L200,500 L150,480 L120,450 L100,400 L90,350 L80,300 L90,250 L100,200 Z"
                    className="fill-gray-300"
                  />
                  <g className="stroke-gray-400 stroke-[0.5] fill-none opacity-50">
                    <line x1="100" y1="150" x2="100" y2="400" />
                    <line x1="200" y1="135" x2="200" y2="500" />
                    <line x1="300" y1="145" x2="300" y2="520" />
                    <line x1="400" y1="135" x2="400" y2="540" />
                    <line x1="500" y1="145" x2="500" y2="560" />
                    <line x1="600" y1="135" x2="600" y2="540" />
                    <line x1="700" y1="145" x2="700" y2="540" />
                    <line x1="800" y1="135" x2="800" y2="550" />
                    <line x1="80" y1="300" x2="930" y2="300" />
                    <line x1="100" y1="200" x2="910" y2="200" />
                    <line x1="100" y1="400" x2="880" y2="450" />
                  </g>
                </svg>
                {universityPins.map((pin, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05, type: 'spring' }}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)] group cursor-pointer z-20"
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {pin.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Active Chapters</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">LIKELION across the U.S.</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a part of the global LIKELION network, LIKELION US connects regional chapters through shared programs and experience. Each chapter operates independently while staying aligned with the overall direction of the network. We believe that wherever we are, our passion continues— and that passion becomes the connection that brings us together.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden py-8 bg-white border-y border-gray-100">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 100, ease: 'linear' } }}
            className="flex whitespace-nowrap items-center"
          >
            {[...universities, ...universities].map((uni, index) => (
              <div key={`${uni}-${index}`} className="mx-8 flex items-center justify-center">
                <span className={`text-xl md:text-3xl font-black tracking-tighter uppercase transition-all duration-500 hover:text-orange-500 cursor-default ${index % 2 === 0 ? 'text-black' : 'text-gray-300'}`}>
                  {uni}
                </span>
                <span className="mx-8 text-orange-500 text-xl">•</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </section>
    </div>
  );
}
