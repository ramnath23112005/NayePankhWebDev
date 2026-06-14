export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  icon: string;
}

export const programs: Program[] = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Providing quality education to underprivileged children through our learning centers, scholarship programs, and digital literacy initiatives across rural communities.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    category: 'Education',
    impact: '10,000+ children educated',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Skill Development',
    description: 'Empowering youth and women with vocational training in digital skills, entrepreneurship, and trades to create sustainable livelihood opportunities.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    category: 'Skill Development',
    impact: '5,000+ youth trained',
    icon: '🔧',
  },
  {
    id: 3,
    title: 'Awareness Campaigns',
    description: 'Running community awareness programs on health, hygiene, environmental conservation, legal rights, and social justice to create informed communities.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    category: 'Awareness',
    impact: '50,000+ people reached',
    icon: '📢',
  },
  {
    id: 4,
    title: 'Community Development',
    description: 'Implementing sustainable community development projects including clean water access, sanitation facilities, and infrastructure improvement in underserved areas.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    category: 'Community',
    impact: '200+ communities served',
    icon: '🏘️',
  },
  {
    id: 5,
    title: 'Healthcare Initiatives',
    description: 'Organizing health camps, mental health awareness programs, and providing access to basic healthcare services for marginalized communities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    category: 'Healthcare',
    impact: '30,000+ patients served',
    icon: '🏥',
  },
  {
    id: 6,
    title: 'Environmental Sustainability',
    description: 'Promoting environmental conservation through tree plantation drives, waste management programs, and renewable energy awareness campaigns.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    category: 'Environment',
    impact: '100,000+ trees planted',
    icon: '🌱',
  },
];
