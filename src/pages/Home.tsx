import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';
import { heroImage } from '../data/photos';

const beliefs = [
  {
    id: '01',
    title: 'Open Access',
    description: 'We believe technology education should be open and accessible to everyone. LIKELION US welcomes students from diverse academic and personal backgrounds, creating an inclusive space where anyone can learn, build, and contribute.',
    icon: <Users className="text-orange-500" size={24} />,
  },
  {
    id: '02',
    title: 'Collaboration',
    description: 'We believe meaningful growth happens through connection and shared effort. As a global student community, we bring together students across campuses, disciplines, and experiences to learn from one another and build together.',
    icon: <Globe className="text-orange-500" size={24} />,
  },
  {
    id: '03',
    title: 'Growth',
    description: 'We believe ideas become meaningful through action. LIKELION US supports young innovators through hands-on learning, experimentation, and real-world practice, helping them turn ideas into impact.',
    icon: <Zap className="text-orange-500" size={24} />,
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
  return (
    <div className="pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white px-4">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              POSSIBILITY<br />TO REALITY
            </h1>
            <p className="text-xl md:text-2xl font-medium tracking-tight text-gray-300">
              당신의 내일과 가장 가까운 오늘을 만듭니다.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <Link
              to="/community"
              className="group inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all"
            >
              <span>Explore</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">What We Believe</h2>
            <div className="w-20 h-2 bg-orange-500 mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {beliefs.map((belief) => (
              <motion.div
                key={belief.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="space-y-6 p-8 border border-gray-100 rounded-2xl hover:border-orange-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-gray-100">{belief.id}</span>
                  {belief.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{belief.title}</h3>
                <p className="text-gray-600 leading-relaxed">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Global Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LIKELION US is a global community that connects universities across three countries, where learning that begins on each campus extends beyond borders.
            </p>
          </div>
          <div className="space-y-12">
            {networks.map((network, index) => (
              <motion.div
                key={network.country}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                <h3 className="text-3xl font-black uppercase tracking-tighter text-orange-500">{network.country}</h3>
                <div className="md:col-span-2">
                  <p className="text-gray-600 leading-relaxed text-lg">{network.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
