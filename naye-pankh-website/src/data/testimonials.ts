export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maya Devi',
    role: 'Program Beneficiary',
    content: 'NayePankh Foundation changed my life. Through their skill development program, I learned tailoring and now run my own small business. I can support my family with dignity.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Volunteer Teacher',
    content: 'Volunteering with NayePankh has been the most rewarding experience of my life. Seeing the children light up when they learn something new is priceless.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    id: 3,
    name: 'Sunita Sharma',
    role: 'Community Leader',
    content: 'The foundation\'s work in our village has been transformative. From education to healthcare, they have brought real change. I am proud to be associated with them.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    id: 4,
    name: 'Amit Kumar',
    role: 'Donor & Supporter',
    content: 'I have supported many causes, but NayePankh stands out for their transparency and impact. Every rupee donated reaches those who need it most.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
];
