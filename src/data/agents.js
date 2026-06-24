export const agents = [
  {
    id: 1,
    name: 'Victoria Ashford',
    title: 'Senior Luxury Advisor',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    phone: '+1 (305) 555-0142',
    email: 'v.ashford@aureliaestates.com',
    bio: 'With over 18 years in ultra-luxury real estate, Victoria has closed over $2 billion in transactions across Miami and the Caribbean.',
    specialties: ['Waterfront Estates', 'Penthouses', 'Investment Properties'],
  },
  {
    id: 2,
    name: 'James Whitmore',
    title: 'Managing Director — Europe',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    phone: '+44 20 7946 0958',
    email: 'j.whitmore@aureliaestates.com',
    bio: 'James leads our European division, specializing in historic London townhouses and contemporary luxury developments.',
    specialties: ['London Properties', 'Historic Estates', 'International Buyers'],
  },
  {
    id: 3,
    name: 'Amira Al-Rashid',
    title: 'Director — Middle East',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    phone: '+971 4 555 0198',
    email: 'a.alrashid@aureliaestates.com',
    bio: 'Amira is the leading authority on Dubai\'s premium property market, with exclusive access to off-market penthouses and villas.',
    specialties: ['Dubai Marina', 'Palm Jumeirah', 'Off-Market Listings'],
  },
  {
    id: 4,
    name: 'Marcus Chen',
    title: 'Luxury Investment Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    phone: '+1 (212) 555-0176',
    email: 'm.chen@aureliaestates.com',
    bio: 'Marcus advises high-net-worth clients on strategic real estate investments in New York and Beverly Hills.',
    specialties: ['Investment Consulting', 'New York Penthouses', 'Portfolio Strategy'],
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    title: 'Client Relations Director',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    phone: '+1 (310) 555-0134',
    email: 'e.rodriguez@aureliaestates.com',
    bio: 'Elena ensures every Aurelia Estates client receives white-glove service from first inquiry to closing and beyond.',
    specialties: ['Client Experience', 'Beverly Hills', 'Luxury Rentals'],
  },
]

export function getAgentById(id) {
  return agents.find((a) => a.id === id)
}
