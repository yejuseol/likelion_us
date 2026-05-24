import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowLeft, Calendar, User, ChevronRight, Linkedin, MessageCircle, Link as LinkIcon, ExternalLink, Mail } from 'lucide-react';
import { newsImages, eventPhotos } from '../data/photos';

const NEWSLETTER_URL = 'https://page.stibee.com/subscriptions/492103';

const newsItems = [
  {
    id: 1, title: '2025 LIKELION US 1st Cohort Recruitment',
    date: 'March 27, 2025', author: 'Admin', category: 'Notice',
    content: `We are excited to announce the recruitment for the 1st cohort of LIKELION US!

LIKELION US is a global student community that connects universities across the United States. Our mission is to lower the bar for anyone to enter the technology industry.

Application Period: March 27 - April 15, 2025
Eligibility: All college students in the US
How to Apply: Visit our website and click 'Apply Now'

Join us and turn your possibilities into reality!`,
  },
  {
    id: 2, title: 'Partnership with UC Berkeley and UCLA',
    date: 'March 15, 2025', author: 'Admin', category: 'News',
    content: `LIKELION US has officially partnered with student organizations at UC Berkeley and UCLA to bring our world-class coding education to more students.

Through this partnership, we will provide hands-on workshops, networking events, and mentorship programs to help students build their own services.

Stay tuned for more updates on our upcoming events at these campuses!`,
  },
  {
    id: 3, title: 'LIKELION Global Hackathon 2025',
    date: 'February 20, 2025', author: 'Admin', category: 'Event',
    content: `Get ready for the biggest event of the year! The LIKELION Global Hackathon 2025 will bring together students from South Korea, Vietnam, and the US to compete and innovate.

This 48-hour challenge will test your skills in design, development, and problem-solving.

Date: May 10-12, 2025
Location: Virtual & In-person (Seoul, Korea)
Prizes: Total pool of $10,000`,
  },
  {
    id: 4, title: 'New Workshop Series: AI & Web Development',
    date: 'February 05, 2025', author: 'Admin', category: 'News',
    content: `We are launching a new workshop series focused on the intersection of AI and Web Development. Learn how to integrate LLMs into your web applications using modern frameworks.

Session 1: Introduction to OpenAI API
Session 2: Building a Chatbot with React
Session 3: Deploying AI Apps to the Cloud`,
  },
];

const channels = [
  { name: 'Instagram', label: '@likelion_us', href: 'https://www.instagram.com/likelion_us', icon: <Instagram size={20} /> },
  { name: 'LinkedIn', label: 'likelionus', href: 'https://linkedin.com/company/likelionus/', icon: <Linkedin size={20} /> },
  { name: 'KakaoTalk', label: 'Open Chat (KR)', href: 'https://open.kakao.com/o/g7Otjh7d', icon: <MessageCircle size={20} /> },
  { name: 'Luma', label: 'luma.com/likelionus', href: 'https://luma.com/likelionus', icon: <LinkIcon size={20} /> },
];

const categoryStyle: Record<string, string> = {
  Notice: 'bg-black text-white',
  News: 'bg-orange-100 text-orange-600',
  Event: 'bg-blue-50 text-blue-600',
};

export default function News() {
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const selectedNews = newsItems.find(item => item.id === selectedNewsId);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">Updates</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              News &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Events</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* News List / Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedNewsId ? (
              <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Latest</p>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">News & Notice</h2>
                </div>
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b-2 border-black text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  <div className="col-span-1">No.</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-6">Title</div>
                  <div className="col-span-3 text-right">Date</div>
                </div>
                <div className="divide-y divide-gray-50">
                  {newsItems.map((item) => (
                    <div key={item.id} onClick={() => setSelectedNewsId(item.id)}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer group items-center rounded-xl">
                      <div className="hidden md:block col-span-1 text-xs font-mono text-gray-300">
                        {String(item.id).padStart(2, '0')}
                      </div>
                      <div className="col-span-2">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${categoryStyle[item.category] || 'bg-gray-100 text-gray-600'}`}>
                          {item.category}
                        </span>
                      </div>
                      <div className="col-span-6">
                        <h3 className="text-base font-bold tracking-tight group-hover:text-orange-500 transition-colors flex items-center gap-2">
                          {item.title}
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </h3>
                      </div>
                      <div className="col-span-3 md:text-right text-xs font-medium text-gray-400">{item.date}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-10">
                <button onClick={() => setSelectedNewsId(null)}
                  className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                  <ArrowLeft size={14} /><span>Back to List</span>
                </button>
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${categoryStyle[selectedNews?.category || ''] || ''}`}>
                      {selectedNews?.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <Calendar size={12} />{selectedNews?.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <User size={12} />{selectedNews?.author}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                    {selectedNews?.title}
                  </h2>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-3xl bg-gray-50">
                  <img src={newsImages[selectedNews?.id ?? 1]} alt={selectedNews?.title}
                    className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{selectedNews?.content}</p>
                </div>
                <button onClick={() => setSelectedNewsId(null)}
                  className="bg-black text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors">
                  Back to List
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Events — GRID LAYOUT (was horizontal scroll) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Past & Upcoming</p>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Events</h2>
              <a href="https://luma.com/likelionus" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors">
                View all on Luma <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {eventPhotos.map((event, i) => (
              <motion.a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all"
              >
                <img src={event.image} alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <p className="text-white text-xs font-bold leading-snug line-clamp-3">{event.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-orange-400 text-[10px] font-black uppercase tracking-widest">
                    View Event <ExternalLink size={10} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Stay Connected</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Connect With Us</h2>
          </div>

          {/* Newsletter callout */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-orange-500/20">
            <div className="space-y-2 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-orange-100">Newsletter</p>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                Get updates in your inbox
              </h3>
              <p className="text-sm text-orange-50/90 max-w-md">
                Subscribe to our newsletter to stay updated on programs, events, and opportunities.
              </p>
            </div>
            <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all shadow-md flex-shrink-0">
              <Mail size={16} />
              <span>Subscribe</span>
            </a>
          </div>

          {/* Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.map((channel) => (
              <a key={channel.name} href={channel.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-7 bg-gray-50 rounded-3xl border border-gray-100 hover:border-orange-400 hover:bg-white hover:shadow-xl hover:shadow-orange-500/5 transition-all group">
                <div className="space-y-1 min-w-0 overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-orange-500 transition-colors">{channel.name}</p>
                  <p className="text-base font-bold tracking-tight truncate">{channel.label}</p>
                </div>
                <div className="text-gray-300 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3">{channel.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
