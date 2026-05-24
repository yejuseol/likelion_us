// ─────────────────────────────────────────────────────────────────────────────
//  PARTICIPATING SCHOOLS (56 total)
//
//  Coordinates are % positions over a US map with viewBox 0 0 1000 600.
//    x = 0%  → west coast (Pacific)
//    x = 100% → east coast (Atlantic)
//    y = 0%  → northern (Canada) border
//    y = 100% → southern (Mexico/Gulf) border
//
//  HOW TO ADD A NEW SCHOOL:
//  1. Look up the city's approximate position in the U.S. map
//  2. Use a similar nearby school as a reference for x/y
//  3. Append the new entry to the array — that's it.
//  Tip: schools sharing a city (e.g. Chicago, NYC) use ±0.5 jitter on x/y
//       so dots don't fully overlap.
// ─────────────────────────────────────────────────────────────────────────────

export interface School {
  name: string;
  x: number;
  y: number;
  state?: string;
}

export const schools: School[] = [
  // Alabama
  { name: 'Auburn University', x: 69.7, y: 70.8, state: 'AL' },

  // Massachusetts (Boston)
  { name: 'Boston University', x: 90.2, y: 38.3, state: 'MA' },
  { name: 'Northeastern University', x: 90.5, y: 38.0, state: 'MA' },

  // California — Bay Area
  { name: 'UC Berkeley', x: 13.2, y: 48.3, state: 'CA' },
  { name: 'Stanford University', x: 13.7, y: 49.5, state: 'CA' },
  { name: 'University of San Francisco', x: 13.0, y: 49.2, state: 'CA' },
  { name: 'San Jose State University', x: 14.0, y: 50.3, state: 'CA' },
  { name: 'UC Davis', x: 14.0, y: 46.7, state: 'CA' },
  { name: 'Diablo Valley College', x: 13.7, y: 47.8, state: 'CA' },

  // California — Central Coast
  { name: 'California Polytechnic State University, San Luis Obispo', x: 16.0, y: 56.7, state: 'CA' },
  { name: 'UC Santa Barbara', x: 17.0, y: 59.7, state: 'CA' },

  // California — LA Basin
  { name: 'UCLA', x: 18.8, y: 63.3, state: 'CA' },
  { name: 'University of Southern California', x: 19.0, y: 63.7, state: 'CA' },
  { name: 'Santa Monica College', x: 18.6, y: 63.2, state: 'CA' },
  { name: 'California State University, Long Beach', x: 19.2, y: 64.2, state: 'CA' },
  { name: 'Orange Coast College', x: 19.5, y: 64.7, state: 'CA' },
  { name: 'UC Irvine', x: 19.8, y: 64.7, state: 'CA' },
  { name: 'UC Riverside', x: 21.0, y: 64.2, state: 'CA' },
  { name: 'California State University, San Bernardino', x: 21.2, y: 63.8, state: 'CA' },

  // California — San Diego
  { name: 'UC San Diego', x: 21.0, y: 68.0, state: 'CA' },

  // Pennsylvania
  { name: 'Carnegie Mellon University', x: 75.2, y: 48.3, state: 'PA' },

  // Ohio
  { name: 'Cincinnati State Technical and Community College', x: 70.0, y: 53.3, state: 'OH' },

  // New York — NYC cluster
  { name: 'Columbia University in the City of New York', x: 85.0, y: 44.7, state: 'NY' },
  { name: 'New York University', x: 85.2, y: 45.3, state: 'NY' },
  { name: 'School of Visual Arts', x: 85.4, y: 45.0, state: 'NY' },
  { name: 'State University of New York', x: 84.8, y: 44.2, state: 'NY' },
  // New York — Syracuse
  { name: 'Syracuse University', x: 82.0, y: 39.2, state: 'NY' },

  // Connecticut
  { name: 'Yale University', x: 87.3, y: 43.0, state: 'CT' },
  { name: 'Eastern Connecticut State University', x: 88.0, y: 42.0, state: 'CT' },

  // Georgia — Atlanta
  { name: 'Emory University', x: 72.0, y: 69.2, state: 'GA' },
  { name: 'Georgia Gwinnett College', x: 72.5, y: 68.8, state: 'GA' },
  { name: 'Georgia Institute of Technology', x: 71.8, y: 69.3, state: 'GA' },

  // Illinois — Chicago + Urbana
  { name: 'Illinois Institute of Technology', x: 64.0, y: 40.0, state: 'IL' },
  { name: 'Columbia College Chicago', x: 64.2, y: 40.3, state: 'IL' },
  { name: 'School of the Art Institute of Chicago', x: 63.8, y: 39.7, state: 'IL' },
  { name: 'University of Illinois at Urbana-Champaign', x: 65.0, y: 46.7, state: 'IL' },

  // Maryland
  { name: 'Johns Hopkins University', x: 81.5, y: 52.5, state: 'MD' },

  // Washington DC
  { name: 'George Washington University', x: 81.2, y: 53.3, state: 'DC' },

  // Michigan
  { name: 'Michigan State University', x: 69.0, y: 39.2, state: 'MI' },
  { name: 'University of Michigan', x: 69.7, y: 40.0, state: 'MI' },

  // Oregon
  { name: 'Oregon State University', x: 17.0, y: 29.2, state: 'OR' },

  // Indiana
  { name: 'Purdue University', x: 66.5, y: 45.0, state: 'IN' },
  { name: 'University of Notre Dame', x: 67.0, y: 41.3, state: 'IN' },

  // Rhode Island
  { name: 'Rhode Island School of Design', x: 89.5, y: 40.8, state: 'RI' },

  // Texas
  { name: 'Rice University', x: 55.5, y: 80.3, state: 'TX' },
  { name: 'Texas A&M University', x: 53.0, y: 78.3, state: 'TX' },
  { name: 'University of Texas at Dallas', x: 51.5, y: 74.2, state: 'TX' },

  // British Columbia, Canada (just above WA)
  { name: 'University of British Columbia', x: 17.0, y: 10.0, state: 'BC, Canada' },

  // Florida
  { name: 'University of Florida', x: 79.0, y: 85.0, state: 'FL' },

  // Hawaii (rendered as inset — see Community.tsx)
  { name: 'University of Hawaii at Manoa', x: 14.0, y: 92.5, state: 'HI' },

  // Minnesota
  { name: 'University of Minnesota', x: 56.5, y: 31.7, state: 'MN' },

  // Washington
  { name: 'University of Washington', x: 17.5, y: 18.3, state: 'WA' },

  // Wisconsin
  { name: 'University of Wisconsin-Madison', x: 61.5, y: 35.8, state: 'WI' },

  // Virginia
  { name: 'Virginia Tech', x: 77.0, y: 56.7, state: 'VA' },

  // Missouri
  { name: 'Washington University in St. Louis', x: 61.0, y: 53.3, state: 'MO' },

  // Nebraska
  { name: 'University of Nebraska-Lincoln', x: 53.5, y: 47.5, state: 'NE' },
];
