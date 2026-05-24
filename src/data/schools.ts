// ─────────────────────────────────────────────────────────────────────────────
//  PARTICIPATING SCHOOLS (56 total)
//  HOW TO EDIT:
//  • Add school: push a new { name, x, y, state } object below
//  • Coordinates: x = 0 (west coast) → 100 (east coast)
//                 y = 0 (north)      → 100 (south)
//  • For schools that share a city, use ±1~2 jitter so dots don't fully overlap
//  • Hawaii / UBC are placed at edge corners since they're off the main map
// ─────────────────────────────────────────────────────────────────────────────

export interface School {
  name: string;
  x: number;
  y: number;
  state?: string;
}

export const schools: School[] = [
  { name: 'Auburn University', x: 72, y: 70, state: 'AL' },
  { name: 'Boston University', x: 91, y: 27, state: 'MA' },
  { name: 'California Polytechnic State University, San Luis Obispo', x: 10, y: 56, state: 'CA' },
  { name: 'California State University, Long Beach', x: 13, y: 63, state: 'CA' },
  { name: 'California State University, San Bernardino', x: 15, y: 62, state: 'CA' },
  { name: 'Carnegie Mellon University', x: 80, y: 37, state: 'PA' },
  { name: 'Cincinnati State Technical and Community College', x: 72, y: 43, state: 'OH' },
  { name: 'Columbia University in the City of New York', x: 88, y: 32, state: 'NY' },
  { name: 'Diablo Valley College', x: 10, y: 47, state: 'CA' },
  { name: 'Eastern Connecticut State University', x: 92, y: 30, state: 'CT' },
  { name: 'Emory University', x: 77, y: 66, state: 'GA' },
  { name: 'George Washington University', x: 85, y: 42, state: 'DC' },
  { name: 'Georgia Gwinnett College', x: 78, y: 65, state: 'GA' },
  { name: 'Georgia Institute of Technology', x: 77, y: 65, state: 'GA' },
  { name: 'Illinois Institute of Technology', x: 66, y: 39, state: 'IL' },
  { name: 'Johns Hopkins University', x: 85, y: 40, state: 'MD' },
  { name: 'Michigan State University', x: 70, y: 33, state: 'MI' },
  { name: 'New York University', x: 89, y: 33, state: 'NY' },
  { name: 'Northeastern University', x: 92, y: 27, state: 'MA' },
  { name: 'Orange Coast College', x: 14, y: 63, state: 'CA' },
  { name: 'Oregon State University', x: 10, y: 22, state: 'OR' },
  { name: 'Purdue University', x: 68, y: 40, state: 'IN' },
  { name: 'Rhode Island School of Design', x: 92, y: 29, state: 'RI' },
  { name: 'Rice University', x: 53, y: 80, state: 'TX' },
  { name: 'San Jose State University', x: 9, y: 50, state: 'CA' },
  { name: 'Santa Monica College', x: 11.5, y: 62, state: 'CA' },
  { name: 'Stanford University', x: 9, y: 49, state: 'CA' },
  { name: 'State University of New York', x: 87, y: 31, state: 'NY' },
  { name: 'Syracuse University', x: 86, y: 30, state: 'NY' },
  { name: 'Texas A&M University', x: 52, y: 78, state: 'TX' },
  { name: 'UC Berkeley', x: 8, y: 48, state: 'CA' },
  { name: 'UC Davis', x: 8, y: 46, state: 'CA' },
  { name: 'UC Irvine', x: 14, y: 63, state: 'CA' },
  { name: 'UC Riverside', x: 15, y: 62.5, state: 'CA' },
  { name: 'UC San Diego', x: 13, y: 67, state: 'CA' },
  { name: 'UC Santa Barbara', x: 10, y: 58, state: 'CA' },
  { name: 'UCLA', x: 11, y: 61, state: 'CA' },
  { name: 'University of British Columbia', x: 10, y: 8, state: 'BC, Canada' },
  { name: 'University of Florida', x: 82, y: 78, state: 'FL' },
  { name: 'University of Hawaii at Manoa', x: 8, y: 92, state: 'HI' },
  { name: 'University of Illinois at Urbana-Champaign', x: 65, y: 42, state: 'IL' },
  { name: 'University of Minnesota', x: 58, y: 28, state: 'MN' },
  { name: 'University of Notre Dame', x: 68, y: 37, state: 'IN' },
  { name: 'University of San Francisco', x: 8, y: 49.5, state: 'CA' },
  { name: 'University of Southern California', x: 12, y: 62, state: 'CA' },
  { name: 'University of Washington', x: 11, y: 14, state: 'WA' },
  { name: 'University of Wisconsin-Madison', x: 62, y: 32, state: 'WI' },
  { name: 'Virginia Tech', x: 80, y: 46, state: 'VA' },
  { name: 'Washington University in St. Louis', x: 60, y: 46, state: 'MO' },
  { name: 'Yale University', x: 91, y: 30, state: 'CT' },
  { name: 'University of Nebraska-Lincoln', x: 51, y: 38, state: 'NE' },
  { name: 'Columbia College Chicago', x: 66, y: 39.5, state: 'IL' },
  { name: 'School of the Art Institute of Chicago', x: 66, y: 38.5, state: 'IL' },
  { name: 'School of Visual Arts', x: 89, y: 32.5, state: 'NY' },
  { name: 'University of Michigan', x: 70, y: 33.5, state: 'MI' },
  { name: 'University of Texas at Dallas', x: 52, y: 72, state: 'TX' },
];
