// ─────────────────────────────────────────────────────────────────────────────
//  PHOTO MANAGEMENT — edit this file to update photos on the site
//
//  How to add a real photo:
//  1. Upload the image to  public/images/  (or a subfolder) via GitHub
//  2. Replace the picsum URL below with the local path, e.g. '/images/hero-bg.jpg'
//  3. Commit & push — GitHub Actions will rebuild the site automatically
// ─────────────────────────────────────────────────────────────────────────────

// Home page — hero background
export const heroImage = 'https://picsum.photos/seed/tech/1920/1080?blur=4';
// → replace with: '/images/hero-bg.jpg'

// Community page — About Us photo
export const communityAboutImage = 'https://picsum.photos/seed/hackathon-vision/1200/800';
// → replace with: '/images/community-about.jpg'

// News page — article cover images (keyed by article id in News.tsx)
export const newsImages: Record<number, string> = {
  1: 'https://picsum.photos/seed/recruitment/1200/600',
  2: 'https://picsum.photos/seed/partnership/1200/600',
  3: 'https://picsum.photos/seed/hackathon/1200/600',
  4: 'https://picsum.photos/seed/workshop/1200/600',
};
// → replace with local paths: 1: '/images/news/recruitment.jpg', etc.

// News page — scrolling event gallery
// Add entries here after uploading photos to public/images/events/
export const eventPhotos = [
  { id: 1, image: 'https://picsum.photos/seed/event1/600/600', link: 'https://luma.com/likelionus' },
  { id: 2, image: 'https://picsum.photos/seed/event2/600/600', link: 'https://luma.com/likelionus' },
  { id: 3, image: 'https://picsum.photos/seed/event3/600/600', link: 'https://luma.com/likelionus' },
  { id: 4, image: 'https://picsum.photos/seed/event4/600/600', link: 'https://luma.com/likelionus' },
  { id: 5, image: 'https://picsum.photos/seed/banner1/600/600', link: 'https://luma.com/likelionus' },
  // { id: 6, image: '/images/events/your-photo.jpg', link: 'https://luma.com/...' },
];
