export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'Founder & Executive Director',
    bio: 'With over 20 years of experience in social work, Dr. Sharma founded NayePankh to bridge the education gap in rural communities.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Director of Operations',
    bio: 'Rajesh brings 15 years of experience in non-profit management and has successfully scaled our programs across 10 states.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 3,
    name: 'Anita Patel',
    role: 'Head of Education Programs',
    bio: 'A former teacher with a passion for educational equity, Anita leads our curriculum development and teacher training initiatives.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Head of Fundraising & Partnerships',
    bio: 'Vikram has raised over $5M for social causes and manages our corporate partnerships and donor relations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    role: 'Head of Communications',
    bio: 'Sneha leads our advocacy and communications strategy, amplifying the voices of the communities we serve.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 6,
    name: 'Arun Verma',
    role: 'Head of Community Outreach',
    bio: 'Arun works directly with communities to identify needs and implement sustainable development solutions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];
