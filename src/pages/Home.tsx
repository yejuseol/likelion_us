import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';
import { useStorageImage, FALLBACK_HERO } from '../data/photos';

const beliefs = [
  {
    id: '01',
    title: 'Open Access',
    description: 'We believe technology education should be open and accessible to everyone. LIKELION US welcomes students from diverse academic and personal backgrounds, creating an inclusive space where anyone can learn, build, and contribute.',
    icon: <Users className="text-orange-500" size={22} />,
  },
  {
    id: '02',
    title: 'Collaboration',
    description: 'We believe meaningful growth happens through connection and shared effort. As a global student community, we bring together students across campuses, disciplines, and experiences to learn from one another and build together.',
    icon: <Globe className="text-orange-500" size={22} />,
  },
  {
    id: '03',
    title: 'Growth',
    description: 'We believe ideas become meaningful through action. LIKELION US supports young innovators through hands-on learning, experimentation, and real-world practice, helping them turn ideas into impact.',
    icon: <Zap className="text-orange-500" size={22} />,
  },
];

const networks = [
  {
    country: 'United States',
    description: 'In 2017, we partnered up with UC Berkeley and UCLA, and introduced our programs to the students. After years of beta testing at multiple prestigious schools, LIKELION officially started the first cohort with students at UC Berkeley last December 2021. We believe we can make a significant change in the educational topography of the United States, by lowering the bar—financial and knowledge-wise—for anyone to enter the technology industry.',
  },
  {
    country: 'South Korea',
    description: 'South Korea is LIKELION\'s birthplace. Empowered by the entrepreneurial success of early LIKELION college program alumni, we reached 67 college campuses by 2019 to support more than 7000 students to start careers in technology. In 2018, LIKELION launched B2C, B2B, and B2G services to assist individuals and organizations—both private and public—tap into the power of technology.',
  },
  {
    country: 'Vietnam',
    description: 'After first entering Vietnam in January 2020, LIKELION established MOU with prestigious universities such as the University of Economics Ho Chi Minh City (UEH) and Industrial University of HoChiMinh City (IUH). \'LIKELION Professional\' has helped non-computer science majors and professionals of various fields to create and launch the services of their own designs.',
  },
];

export default function Home() {
  const heroImage = useStorageImage('images/hero-bg.jpg', FALLBACK_HERO);

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
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-300 mb-4">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span>Global Student Community</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter uppercase leading-[0.9]">
              POSSIBILITY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TO REALITY</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-lg mx-auto">
              당신의 내일과 가장 가까운 오늘을 만듭니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/community"
              className="group inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-orange-500/30"
            >
              <span>Explore Community</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/news"
              className="inline-flex items-center space-x-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300"
            >
              <span>News & Events</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">What We Believe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 bg-white"
              >
                <div className="absolute top-6 right-6 text-5xl font-black text-gray-50 group-hover:text-orange-50 transition-colors select-none">
                  {belief.id}
                </div>
                <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  {belief.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3 uppercase">{belief.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
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
              LIKELION US is a global community that connects universities across three countries, where learning that begins on each campus extends beyond borders.
            </p>
          </motion.div>

          <div className="space-y-6">
            {networks.map((network, index) => (
              <motion.div
                key={network.country}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all duration-300 grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
              >
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">0{index + 1}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{network.country}</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-gray-500 leading-relaxed text-sm">{network.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
