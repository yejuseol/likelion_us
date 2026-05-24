// ─────────────────────────────────────────────────────────────────────────────
//  WHAT WE DO — 3 core areas with key activities
// ─────────────────────────────────────────────────────────────────────────────

export interface CoreArea {
  id: '01' | '02' | '03';
  slug: 'community' | 'education' | 'ecosystem';
  title: string;
  shortTitle: string;
  description: string;
  activities: string[];
  hasShowcase?: boolean;          // ecosystem has K-Tech Pioneers showcase
}

export const intro =
  'LIKELION US creates opportunities for people to learn, build, connect, and grow across the U.S. and Korea. Our work is centered around three core areas: community, education, and open innovation.';

export const coreAreas: CoreArea[] = [
  {
    id: '01',
    slug: 'community',
    title: 'Community Building',
    shortTitle: 'Community',
    description:
      'We build a nationwide community that connects students, founders, engineers, researchers, and innovators across the U.S. Through campus communities, regional networks, and open community initiatives, we create spaces where people can share opportunities, exchange ideas, and grow together.',
    activities: [
      'Campus Communities',
      'Open Community',
      'Networking & Meetups',
      'Member Engagement',
      'Online Community Channels',
      'Opportunity Sharing',
    ],
  },
  {
    id: '02',
    slug: 'education',
    title: 'Education & Experiential Programs',
    shortTitle: 'Education',
    description:
      'We provide hands-on programs where participants learn, build, and turn ideas into real projects. From student programs and team-based learning to hackathons, ideathons, and industry collaboration projects, we help participants develop practical skills and real-world execution experience.',
    activities: [
      'Student Programs',
      'AI / Tech / Entrepreneurship Education',
      'Team Projects',
      'Hackathons & Ideathons',
      'Industry Collaboration Projects',
      'Demo Day & Pitch Sessions',
    ],
  },
  {
    id: '03',
    slug: 'ecosystem',
    title: 'Ecosystem & Open Innovation',
    shortTitle: 'Ecosystem',
    description:
      'We connect talent, startups, companies, universities, and public institutions through events, partnerships, and cross-border innovation programs. Through initiatives such as K-Tech Pioneers, founder meetups, speaker sessions, and corporate collaborations, we help build meaningful bridges between the U.S. and Korea.',
    activities: [
      'Speaker Sessions',
      'Founder Meetups',
      'Corporate & University Partnerships',
      'K-Tech Pioneers',
      'Cross-border Innovation Programs',
      'Startup & Industry Collaboration',
    ],
    hasShowcase: true,
  },
];

// K-Tech Pioneers showcase — Instagram poster images
// TODO: add real poster image paths to public/ktech/
export const kTechPosters: string[] = [
  // '/ktech/poster1.jpg',
  // '/ktech/poster2.jpg',
];
