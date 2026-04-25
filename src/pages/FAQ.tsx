import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const categories = ['General', 'Participation', 'Events'] as const;
type Category = typeof categories[number];

const faqs: { category: Category; question: string; answer: string }[] = [
  {
    category: 'General',
    question: 'How can I join the Open Community?',
    answer: 'The LIKELION US Open Community is open to everyone, regardless of school, major, or prior experience. After a simple sign-up on our website, you can explore community content, stay updated on projects, and participate in events and networking opportunities. No campus affiliation is required — anyone interested in technology, entrepreneurship, and community is welcome to join.',
  },
  {
    category: 'General',
    question: 'How is the Open Community operated?',
    answer: `The LIKELION US Open Community operates based on the following principles:
• Open and self-driven participation based on individual interests and goals
• Project- and event-focused activities, including hackathons, study groups, networking events, and seminars
• Primarily online operations, making the community accessible from anywhere
• Community guidelines to ensure a respectful, inclusive, and safe environment for all members`,
  },
  {
    category: 'General',
    question: 'How can I become a sponsor or partner?',
    answer: `LIKELION US welcomes sponsorships and partnerships with companies, organizations, and institutions.
Through partnerships, we offer opportunities such as:
• Recruitment collaboration and employer branding
• Co-hosting hackathons and events
• Technology, service, or content collaboration
• Marketing and brand exposure within our community
For partnership inquiries, please contact us at simba@likelion.net.`,
  },
  {
    category: 'Participation',
    question: 'Who can join?',
    answer: `Our community is open to anyone who is eager to learn, grow, and explore technology and startups together.
• University students
• Recent graduates
• Individuals interested in tech, startups, and learning
No prior coding or startup experience is required!`,
  },
  {
    category: 'Participation',
    question: 'Do I need strong technical skills?',
    answer: 'No! We value motivation, curiosity, and a willingness to learn more than prior technical expertise. Whether you\'re just getting started or exploring new interests, our community is designed to support your growth step by step!',
  },
  {
    category: 'Participation',
    question: 'Is there a participation fee?',
    answer: `Joining the community is completely free.
However, some special programs, workshops, or events may require separate registration or a participation fee, which will always be clearly communicated in advance.`,
  },
  {
    category: 'Events',
    question: 'Are there Hackathons?',
    answer: 'Yes! We have been hosting hackathons since 2023, bringing together students from multiple universities to collaborate on real-world projects. These hackathons are designed to encourage teamwork, hands-on problem solving, and creativity, while giving participants the opportunity to build meaningful projects and connect with peers from diverse backgrounds.',
  },
  {
    category: 'Events',
    question: 'Are activities held online or in-person?',
    answer: `Our community offers a mix of both online and in-person activities, allowing members to participate in ways that best fit their location and availability.
• Our activities encompass both online and in-person components.
• Local campus activities are typically organized independently by each group.
• Major events are usually held in person.`,
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? 'text-orange-500' : 'text-black group-hover:text-orange-500'}`}>
          {question}
        </h3>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-orange-500 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-orange-100 group-hover:text-orange-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
            <div className="pb-8 text-gray-600 leading-relaxed text-lg whitespace-pre-line">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>('General');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            Frequently<br />asked questions
          </motion.h1>
        </div>
      </section>

      <section className="pt-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-100 pb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                  activeCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[400px]">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={`${activeCategory}-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Still have questions?</h2>
          <p className="text-xl text-gray-600">We're here to help. Reach out to us anytime.</p>
          <a
            href="mailto:simba@likelion.net"
            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
