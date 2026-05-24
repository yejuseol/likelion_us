// ─────────────────────────────────────────────────────────────────────────────
//  PARTNER LOGOS — shown on the homepage
//  HOW TO ADD A PARTNER:
//  1. Upload the logo to  public/partners/  (PNG or SVG, ideally transparent bg)
//  2. Add an entry below with: { name, logo: '/partners/yourfile.png', link, tier }
//  3. Optional: tier ('strategic' | 'partner' | 'community') groups them visually
// ─────────────────────────────────────────────────────────────────────────────

export type PartnerTier = 'strategic' | 'partner' | 'community';

export interface Partner {
  name: string;
  logo: string;            // path under /public, e.g. '/partners/google.svg'
  link?: string;           // optional outbound link
  tier?: PartnerTier;
}

// TODO: replace placeholder entries with real partner logos
export const partners: Partner[] = [
  // Strategic partners (e.g. main sponsors)
  // { name: 'Partner Name', logo: '/partners/example.svg', link: 'https://example.com', tier: 'strategic' },

  // General partners
  // { name: 'Partner Name', logo: '/partners/example.svg', link: 'https://example.com', tier: 'partner' },

  // Community / school partners
  // { name: 'Partner Name', logo: '/partners/example.svg', link: 'https://example.com', tier: 'community' },
];

export const tierLabels: Record<PartnerTier, string> = {
  strategic: 'Strategic Partners',
  partner: 'Partners',
  community: 'Community Partners',
};
