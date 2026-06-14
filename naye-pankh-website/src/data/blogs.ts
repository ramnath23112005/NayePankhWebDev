export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Transforming Rural Education: Our Journey So Far',
    excerpt: 'How we have brought quality education to over 10,000 children in remote villages across India.',
    content: 'Over the past five years, NayePankh Foundation has been working tirelessly to bridge the education gap in rural India...',
    author: 'Dr. Priya Sharma',
    date: '2026-05-20',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Empowering Women Through Skill Development',
    excerpt: 'Our skill development programs have helped thousands of women become financially independent.',
    content: 'In a country where women often face barriers to economic participation, our skill development programs...',
    author: 'Anita Patel',
    date: '2026-05-15',
    category: 'Women Empowerment',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    title: '5 Ways You Can Make a Difference Today',
    excerpt: 'Simple yet impactful ways to contribute to social change in your community.',
    content: 'Making a difference does not always require grand gestures. Here are five simple ways you can contribute...',
    author: 'Rajesh Kumar',
    date: '2026-05-10',
    category: 'Volunteer',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    featured: true,
  },
  {
    id: 4,
    title: 'Our Environmental Impact: A Year in Review',
    excerpt: 'Looking back at our environmental conservation achievements and plans for the future.',
    content: 'This year, we planted over 100,000 trees, set up waste management systems in 50 villages...',
    author: 'Arun Verma',
    date: '2026-04-28',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Healthcare Access: Breaking Barriers in Rural India',
    excerpt: 'Our healthcare initiatives are bringing medical services to those who need them most.',
    content: 'Access to quality healthcare remains a challenge in rural India. Our mobile health clinics...',
    author: 'Dr. Priya Sharma',
    date: '2026-04-20',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Volunteer Spotlight: Stories of Dedication',
    excerpt: 'Meet the amazing volunteers who make our work possible through their dedication and passion.',
    content: 'Behind every successful program are countless hours of volunteer effort. This month, we spotlight...',
    author: 'Sneha Gupta',
    date: '2026-04-15',
    category: 'Volunteer',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Partnership Announcement: New Education Initiative',
    excerpt: 'We are excited to announce our new partnership with leading tech companies for digital education.',
    content: 'NayePankh Foundation is proud to announce a groundbreaking partnership with...',
    author: 'Vikram Singh',
    date: '2026-04-10',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Building Sustainable Communities: Our Approach',
    excerpt: 'Understanding our holistic approach to community development and long-term sustainability.',
    content: 'Sustainable development requires a holistic approach that addresses multiple interconnected challenges...',
    author: 'Arun Verma',
    date: '2026-03-25',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    featured: false,
  },
];
