import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowLeft, Calendar, User, ChevronRight, Linkedin, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { newsImages, eventPhotos } from '../data/photos';

const newsItems = [
  {
    id: 1,
    title: '2025 LIKELION US 1st Cohort Recruitment',
    date: 'March 27, 2025',
    author: 'Admin',
    category: 'Notice',
    content: `We are excited to announce the recruitment for the 1st cohort of LIKELION US!

LIKELION US is a global student community that connects universities across the United States. Our mission is to lower the bar for anyone to enter the technology industry.

Application Period: March 27 - April 15, 2025
Eligibility: All college students in the US
How to Apply: Visit our website and click 'Apply Now'

Join us and turn your possibilities into reality!`,
  },
  {
    id: 2,
    title: 'Partnership with UC Berkeley and UCLA',
    date: 'March 15, 2025',
    author: 'Admin',
    category: 'News',
    content: `LIKELION US has officially partnered with student organizations at UC Berkeley and UCLA to bring our world-class coding education to more students.

Through this partnership, we will provide hands-on workshops, networking events, and mentorship programs to help students build their own services.

Stay tuned for more updates on our upcoming events at these campuses!`,
  },
  {
    id: 3,
    title: 'LIKELION Global Hackathon 2025',
    date: 'February 20, 2025',
    author: 'Admin',
    category: 'Event',
    content: `Get ready for the biggest event of the year! The LIKELION Global Hackathon 2025 will bring together students from South Korea, Vietnam, and the US to compete and innovate.

This 48-hour challenge will test your skills in design, development, and problem-solving.

Date: May 10-12, 2025
Location: Virtual & In-person (Seoul, Korea)
Prizes: Total pool of $10,000`,
  },
  {
    id: 4,
    title: 'New Workshop Series: AI & Web Development',
    date: 'February 05, 2025',
    author: 'Admin',
    category: 'News',
    content: `We are launching a new workshop series focused on the intersection of AI and Web Development. Learn how to integrate LLMs into your web applications using modern frameworks.

Session 1: Introduction to OpenAI API
Session 2: Building a Chatbot with React
Session 3: Deploying AI Apps to the Cloud`,
  },
];

const channels = [
  { name: 'Instagram', label: '@likelion_us', href: 'https://www.instagram.com/likelion_us', icon: <Instagram size={24} /> },
  { name: 'LinkedIn', label: 'linkedin.com/company/likelionus/', href: 'https://linkedin.com/company/likelionus/', icon: <Linkedin size={24} /> },
  { name: 'KakaoTalk', label: 'Open Chat (KR)', href: 'https://open.kakao.com/o/g7Otjh7d', icon: <MessageCircle size={24} /> },
  { name: 'Luma', label: 'luma.com/likelionus', href: 'https://luma.com/likelionus', icon: <LinkIcon size={24} /> },
];

export default function News() {
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const selectedNews = newsItems.find(item => item.id === selectedNewsId);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">NEWS & NOTICE</h1>
            <p className="text-lg font-medium text-gray-500 uppercase tracking-widest">
              Stay updated with the latest from LIKELION US
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedNewsId ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b-2 border-black text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="col-span-1">No.</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-6">Title</div>
                  <div className="col-span-3 text-right">Date</div>
                </div>
                <div className="divide-y divide-gray-100">
                  {newsItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedNewsId(item.id)}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 hover:bg-gray-50 transition-colors cursor-pointer group items-center"
                    >
                      <div className="hidden md:block col-span-1 text-sm font-mono text-gray-400">
                        {String(item.id).padStart(2, '0')}
                      </div>
                      <div className="col-span-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          item.category === 'Notice' ? 'bg-black text-white' : 'bg-orange-100 text-orange-600'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <h3 className="text-lg font-bold tracking-tight group-hover:text-orange-500 transition-colors flex items-center">
                          {item.title}
                          <ChevronRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h3>
                      </div>
                      <div className="col-span-12 md:col-span-3 md:text-right text-xs font-medium text-gray-400">{item.date}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <button
                  onClick={() => setSelectedNewsId(null)}
                  className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back to List</span>
                </button>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        {selectedNews?.category}
                      </span>
                      <div className="flex items-center space-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <span className="flex items-center space-x-1"><Calendar size={14} /><span>{selectedNews?.date}</span></span>
                        <span className="flex items-center space-x-1"><User size={14} /><span>{selectedNews?.author}</span></span>
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                      {selectedNews?.title}
                    </h2>
                  </div>

                  <div className="aspect-video w-full overflow-hidden rounded-3xl">
                    <img
                      src={newsImages[selectedNews?.id ?? 1]}
                      alt={selectedNews?.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">{selectedNews?.content}</p>
                  </div>
                </div>

                <div className="pt-12 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedNewsId(null)}
                    className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors"
                  >
                    Back to List
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Connect With Us</h2>
            <p className="text-lg text-gray-500 uppercase tracking-widest font-bold">Official Channels</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-white rounded-3xl border border-gray-100 hover:border-orange-500 hover:shadow-lg transition-all group"
              >
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-orange-500 transition-colors">{channel.name}</p>
                  <p className="text-lg font-bold tracking-tight">{channel.label}</p>
                </div>
                <div className="text-gray-400 group-hover:text-orange-500 transition-colors">{channel.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">Upcoming Events</h2>
          <p className="text-gray-500 uppercase tracking-widest font-bold text-sm">Experience LIKELION US in action</p>
        </div>
        <div className="relative flex whitespace-nowrap pt-4">
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
            className="flex gap-6 px-3"
          >
            {[...eventPhotos, ...eventPhotos, ...eventPhotos].map((event, idx) => (
              <a
                key={`${event.id}-${idx}`}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-none w-48 md:w-64 aspect-square overflow-hidden rounded-3xl shadow-sm border border-gray-100 group"
              >
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">View Event</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
