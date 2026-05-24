// ─────────────────────────────────────────────────────────────────────────────
//  GLOBAL NETWORK — country chapter sites
//  Replace URLs as needed (open in new tab)
// ─────────────────────────────────────────────────────────────────────────────

export interface NetworkCountry {
  country: string;
  description: string;
  url: string;
}

export const networks: NetworkCountry[] = [
  {
    country: 'United States',
    description:
      'In 2017, we partnered with UC Berkeley and UCLA, and introduced our programs to students. After years of beta testing at multiple prestigious schools, LIKELION officially started the first cohort at UC Berkeley in December 2021. We believe we can make a significant change in the educational topography of the United States by lowering the bar — financial and knowledge-wise — for anyone to enter the technology industry.',
    url: 'https://yejuseol.github.io/likelion_us/',
  },
  {
    country: 'South Korea',
    description:
      "South Korea is LIKELION's birthplace. Empowered by the entrepreneurial success of early LIKELION college program alumni, we reached 67 college campuses by 2019 to support more than 7,000 students to start careers in technology. In 2018, LIKELION launched B2C, B2B, and B2G services to assist individuals and organizations — both private and public — tap into the power of technology.",
    url: 'https://www.likelion.net/',
  },
  {
    country: 'Vietnam',
    description:
      "After first entering Vietnam in January 2020, LIKELION established MOUs with prestigious universities such as the University of Economics Ho Chi Minh City (UEH) and Industrial University of HoChiMinh City (IUH). 'LIKELION Professional' has helped non-CS majors and professionals of various fields to create and launch the services of their own designs.",
    url: 'https://www.likelion.net/',
  },
];
