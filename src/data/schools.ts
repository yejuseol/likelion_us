// ─────────────────────────────────────────────────────────────────────────────
//  PARTICIPATING SCHOOLS (56 total)
//
//  Coordinates are % positions over a US map with viewBox 0 0 1000 600.
//  Computed from each city's lat/lng using a simple linear projection:
//    x% = ((lng + 125) / 58) * 85 + 10        (west=0%, east=100%)
//    y% = ((49 - lat) / 24) * 75 + 18.3        (north=0%, south=100%)
//
//  HOW TO ADD A NEW SCHOOL:
//  1. Look up the city's lat/lng (Google or Wikipedia)
//  2. Compute x%, y% with the formulas above, OR copy a nearby school
//  3. Append the new entry to the array.
//  Tip: schools sharing a city use ±0.3% jitter so dots don't fully overlap.
// ─────────────────────────────────────────────────────────────────────────────

export interface School {
  name: string;
  x: number;
  y: number;
  state?: string;
}

export const schools: School[] = [
  // Alabama
  { name: 'Auburn University', x: 67.8, y: 69.7, state: 'AL' },

  // Massachusetts (Boston)
  { name: 'Boston University', x: 89.0, y: 39.0, state: 'MA' },
  { name: 'Northeastern University', x: 89.3, y: 39.2, state: 'MA' },

  // California — Bay Area
  { name: 'UC Berkeley', x: 14.0, y: 53.2, state: 'CA' },
  { name: 'Stanford University', x: 14.1, y: 54.5, state: 'CA' },
  { name: 'University of San Francisco', x: 13.9, y: 53.5, state: 'CA' },
  { name: 'San Jose State University', x: 14.6, y: 54.8, state: 'CA' },
  { name: 'UC Davis', x: 14.8, y: 51.0, state: 'CA' },
  { name: 'Diablo Valley College', x: 14.3, y: 52.8, state: 'CA' },

  // California — Central Coast
  { name: 'California Polytechnic State University, San Luis Obispo', x: 17.0, y: 60.0, state: 'CA' },
  { name: 'UC Santa Barbara', x: 18.5, y: 63.0, state: 'CA' },

  // California — LA Basin (slightly inland to stay within outline)
  { name: 'UCLA', x: 20.0, y: 64.5, state: 'CA' },
  { name: 'University of Southern California', x: 20.3, y: 64.7, state: 'CA' },
  { name: 'Santa Monica College', x: 19.7, y: 64.4, state: 'CA' },
  { name: 'California State University, Long Beach', x: 20.5, y: 65.2, state: 'CA' },
  { name: 'Orange Coast College', x: 20.8, y: 65.5, state: 'CA' },
  { name: 'UC Irvine', x: 21.0, y: 65.7, state: 'CA' },
  { name: 'UC Riverside', x: 21.7, y: 64.5, state: 'CA' },
  { name: 'California State University, San Bernardino', x: 22.0, y: 64.2, state: 'CA' },

  // California — San Diego (just above the Mexican border line)
  { name: 'UC San Diego', x: 21.5, y: 67.5, state: 'CA' },

  // Pennsylvania
  { name: 'Carnegie Mellon University', x: 75.9, y: 45.2, state: 'PA' },

  // Ohio
  { name: 'Cincinnati State Technical and Community College', x: 69.3, y: 49.3, state: 'OH' },

  // New York — NYC cluster
  { name: 'Columbia University in the City of New York', x: 84.9, y: 44.0, state: 'NY' },
  { name: 'New York University', x: 84.7, y: 44.3, state: 'NY' },
  { name: 'School of Visual Arts', x: 84.8, y: 44.1, state: 'NY' },
  { name: 'State University of New York', x: 85.1, y: 38.2, state: 'NY' }, // Albany
  // New York — Syracuse
  { name: 'Syracuse University', x: 81.6, y: 37.0, state: 'NY' },

  // Connecticut
  { name: 'Yale University', x: 86.3, y: 42.3, state: 'CT' },
  { name: 'Eastern Connecticut State University', x: 87.4, y: 41.2, state: 'CT' },

  // Georgia — Atlanta
  { name: 'Emory University', x: 69.6, y: 65.4, state: 'GA' },
  { name: 'Georgia Gwinnett College', x: 70.1, y: 65.0, state: 'GA' },
  { name: 'Georgia Institute of Technology', x: 69.5, y: 65.5, state: 'GA' },

  // Illinois — Chicago + Urbana
  { name: 'Illinois Institute of Technology', x: 64.8, y: 40.7, state: 'IL' },
  { name: 'Columbia College Chicago', x: 64.9, y: 40.8, state: 'IL' },
  { name: 'School of the Art Institute of Chicago', x: 64.7, y: 40.5, state: 'IL' },
  { name: 'University of Illinois at Urbana-Champaign', x: 63.8, y: 46.2, state: 'IL' },

  // Maryland
  { name: 'Johns Hopkins University', x: 80.9, y: 48.5, state: 'MD' },

  // Washington DC
  { name: 'George Washington University', x: 80.3, y: 49.8, state: 'DC' },

  // Michigan
  { name: 'Michigan State University', x: 69.4, y: 38.0, state: 'MI' },
  { name: 'University of Michigan', x: 70.5, y: 39.3, state: 'MI' },

  // Oregon (well inland from coast to stay within outline)
  { name: 'Oregon State University', x: 14.0, y: 32.2, state: 'OR' },

  // Indiana
  { name: 'Purdue University', x: 65.8, y: 45.2, state: 'IN' },
  { name: 'University of Notre Dame', x: 66.8, y: 41.2, state: 'IN' },

  // Rhode Island
  { name: 'Rhode Island School of Design', x: 88.5, y: 40.8, state: 'RI' },

  // Texas
  { name: 'Rice University', x: 53.4, y: 78.5, state: 'TX' },
  { name: 'Texas A&M University', x: 52.0, y: 75.8, state: 'TX' },
  { name: 'University of Texas at Dallas', x: 51.4, y: 68.3, state: 'TX' },

  // British Columbia, Canada (displayed above the US outline)
  { name: 'University of British Columbia', x: 13.5, y: 11.0, state: 'BC, Canada' },

  // Florida
  { name: 'University of Florida', x: 72.5, y: 78.0, state: 'FL' },

  // Hawaii (rendered inside the inset box bottom-left)
  { name: 'University of Hawaii at Manoa', x: 16.0, y: 93.0, state: 'HI' },

  // Minnesota
  { name: 'University of Minnesota', x: 56.5, y: 31.0, state: 'MN' },

  // Washington
  { name: 'University of Washington', x: 15.5, y: 22.5, state: 'WA' },

  // Wisconsin
  { name: 'University of Wisconsin-Madison', x: 62.2, y: 36.8, state: 'WI' },

  // Virginia
  { name: 'Virginia Tech', x: 75.3, y: 55.2, state: 'VA' },

  // Missouri
  { name: 'Washington University in St. Louis', x: 60.8, y: 50.7, state: 'MO' },

  // Nebraska
  { name: 'University of Nebraska-Lincoln', x: 51.5, y: 43.8, state: 'NE' },
];
