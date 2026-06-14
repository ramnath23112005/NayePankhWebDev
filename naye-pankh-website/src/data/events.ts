export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Annual Education Fair 2026',
    description: 'Join us for our flagship event showcasing educational opportunities for underprivileged children. Featuring interactive workshops, scholarship distributions, and inspiring talks from educators.',
    date: '2026-07-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Community Hall, Delhi',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Skill Development Workshop',
    description: 'A comprehensive workshop on digital skills including web development, graphic design, and digital marketing for youth seeking employment opportunities.',
    date: '2026-08-20',
    time: '10:00 AM - 4:00 PM',
    location: 'Training Center, Mumbai',
    category: 'Skill Development',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'Health & Hygiene Camp',
    description: 'Free health checkup camp with specialist doctors. Services include general health checkup, eye testing, dental checkup, and awareness sessions on hygiene practices.',
    date: '2026-09-10',
    time: '8:00 AM - 2:00 PM',
    location: 'Rural Health Center, Rajasthan',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    isUpcoming: true,
  },
  {
    id: 4,
    title: 'Green Earth Drive',
    description: 'A massive tree plantation drive across 50 villages. Volunteers will plant 10,000 saplings and participate in environmental awareness programs.',
    date: '2026-07-05',
    time: '6:00 AM - 12:00 PM',
    location: 'Multiple Locations, UP',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    isUpcoming: true,
  },
  {
    id: 5,
    title: 'Women Empowerment Summit',
    description: 'A day-long summit focusing on womens entrepreneurship, financial independence, and leadership skills. Featuring successful women entrepreneurs as speakers.',
    date: '2026-10-12',
    time: '9:30 AM - 5:30 PM',
    location: 'Convention Center, Pune',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80',
    isUpcoming: true,
  },
  {
    id: 6,
    title: 'Fundraising Gala 2025',
    description: 'Our annual fundraising gala with cultural performances, dinner, and auctions. Proceeds support our education and skill development programs.',
    date: '2025-12-20',
    time: '6:00 PM - 11:00 PM',
    location: 'Grand Hotel, New Delhi',
    category: 'Fundraising',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    isUpcoming: false,
  },
  {
    id: 7,
    title: 'Digital Literacy Camp 2025',
    description: 'A month-long digital literacy program teaching basic computer skills, internet safety, and online communication to rural communities.',
    date: '2025-11-01',
    time: '10:00 AM - 3:00 PM',
    location: 'Community Centers, Bihar',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    isUpcoming: false,
  },
  {
    id: 8,
    title: 'Clean Water Initiative Launch',
    description: 'Launch of our clean water project providing safe drinking water to 50 villages through water purification systems and wells.',
    date: '2025-10-05',
    time: '11:00 AM - 1:00 PM',
    location: 'Village Cluster, Madhya Pradesh',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=600&q=80',
    isUpcoming: false,
  },
];
