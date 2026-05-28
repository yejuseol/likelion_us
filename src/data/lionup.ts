// ─────────────────────────────────────────────────────────────────────────────
//  LION-UP PROJECTS
//  Reference: https://likelion.notion.site/Lion-up-27a44860a4f480f6a3cef30ee88f72d1
//
//  HOW TO ADD A PROJECT:
//  1. Add an entry below with company × school × project × result
//  2. Add Instagram post URL if students shared their results publicly
//  3. Add thumbnail (Instagram post screenshot or project image) to public/lionup/
// ─────────────────────────────────────────────────────────────────────────────

export interface LionUpProject {
  id: number;
  company: string;
  school: string;
  project: string;
  result: string;
  instagramUrl?: string;
  thumbnail?: string;        // path under /public
}

// TODO: replace with real projects
export const lionUpProjects: LionUpProject[] = [
  // Example structure (placeholder):
  // {
  //   id: 1,
  //   company: 'Company Name',
  //   school: 'UC Berkeley',
  //   project: 'AI-powered learning platform',
  //   result: '500+ active users in 3 months',
  //   instagramUrl: 'https://www.instagram.com/p/...',
  //   thumbnail: '/lionup/project1.jpg',
  // },
];

// Apply form URL — replace with real Google Form once available
// Used by: Home page "Apply for Lion-Up" button AND Community page Lion-Up section
export const lionUpApplyUrl = 'https://docs.google.com/forms/d/REPLACE_ME/viewform';

// Contact for inquiries
export const lionUpContactEmail = 'simba@likelion.net';
