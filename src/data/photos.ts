import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

// ─────────────────────────────────────────────────────────────────────────────
//  PHOTO MANAGEMENT
//  To replace placeholder images with real photos:
//  1. Go to Firebase Console → Storage → Create "images/" folder
//  2. Upload your image (e.g. hero-bg.jpg)
//  3. The site will automatically display it — no code changes needed!
//
//  Storage paths used:
//    images/hero-bg.jpg          ← Home page hero background
//    images/community-about.jpg  ← Community page About Us photo
// ─────────────────────────────────────────────────────────────────────────────

// Hook: fetches a Firebase Storage download URL, falls back to placeholder
export function useStorageImage(storagePath: string, fallback: string): string {
  const [url, setUrl] = useState(fallback);
  useEffect(() => {
    getDownloadURL(ref(storage, storagePath))
      .then(setUrl)
      .catch(() => setUrl(fallback));
  }, [storagePath, fallback]);
  return url;
}

// Fallback placeholders (used until real images are uploaded to Storage)
export const FALLBACK_HERO = 'https://picsum.photos/seed/tech/1920/1080?blur=4';
export const FALLBACK_COMMUNITY = 'https://picsum.photos/seed/hackathon-vision/1200/800';

// News article cover images — replace picsum URLs after uploading to Storage
// Storage paths: images/news/recruitment.jpg, images/news/partnership.jpg, etc.
export const newsImages: Record<number, string> = {
  1: 'https://picsum.photos/seed/recruitment/1200/600',
  2: 'https://picsum.photos/seed/partnership/1200/600',
  3: 'https://picsum.photos/seed/hackathon/1200/600',
  4: 'https://picsum.photos/seed/workshop/1200/600',
};

// Real LIKELION US events from luma.com/likelionus
export const eventPhotos = [
  {
    id: 1,
    image: 'https://images.lumacdn.com/event-covers/y7/fa25ed33-88db-4ece-a6cb-5e3cd07ce85f.png',
    link: 'https://lu.ma/uysch9ln',
    title: '[LIKELION US&UAL] Autonomy & AI: Driving the Future',
  },
  {
    id: 2,
    image: 'https://images.lumacdn.com/event-covers/5o/e52e3119-1f31-41d3-9446-fcf9aa91fb52.jpg',
    link: 'https://lu.ma/0toi78fr',
    title: 'Korean Founders Meetup in Stanford',
  },
  {
    id: 3,
    image: 'https://images.lumacdn.com/event-covers/ti/bacc48dd-dc0a-4dd8-98fa-cf95a94629bb.png',
    link: 'https://lu.ma/p23ipyj4',
    title: '2025 Dream AI Hackathon',
  },
  {
    id: 4,
    image: 'https://images.lumacdn.com/event-covers/n3/3c3dcb07-3f99-442b-a32f-b7ee936bbf20.png',
    link: 'https://lu.ma/s5tciu65',
    title: '[Codetree x LIKELION] AI시대에 코딩 테스트 준비',
  },
  {
    id: 5,
    image: 'https://images.lumacdn.com/event-covers/m5/027e9d51-068f-47c5-b145-9eec2c50bb19.png',
    link: 'https://lu.ma/5zyjd853',
    title: '[Lion-Up] Path to Employment in FAANG',
  },
  {
    id: 6,
    image: 'https://images.lumacdn.com/event-covers/sv/b2278ada-02af-44ac-ace2-6ba37ab28750',
    link: 'https://lu.ma/zv93d4v3',
    title: '빅테크 15년차 엔지니어에게 듣는 인터뷰 노하우',
  },
  {
    id: 7,
    image: 'https://images.lumacdn.com/event-covers/na/c855720c-240d-452a-b551-553f5d2160b5',
    link: 'https://lu.ma/kanu48a4',
    title: '실리콘밸리 창업가 네트워킹',
  },
  {
    id: 8,
    image: 'https://images.lumacdn.com/event-covers/gy/65d8a388-db8f-4d26-82cc-1c3782663bb0',
    link: 'https://lu.ma/qcz94ztr',
    title: '[Lion-Up] Career Talk: Tips From a Hiring Manager',
  },
  {
    id: 9,
    image: 'https://cdn.lu.ma/event-defaults/1-1/standard6.png',
    link: 'https://lu.ma/q2kbuiel',
    title: 'Career Networking Event (with Big Tech)',
  },
];
