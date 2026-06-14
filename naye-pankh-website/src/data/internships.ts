export interface Internship {
  id: number;
  title: string;
  department: string;
  description: string;
  duration: string;
  location: string;
  requirements: string[];
  stipend: string;
}

export const internships: Internship[] = [
  {
    id: 1,
    title: 'Education Program Intern',
    department: 'Education',
    description: 'Support our education initiatives by assisting with curriculum development, teacher training, and monitoring learning outcomes.',
    duration: '3 months',
    location: 'Delhi / Remote',
    requirements: ['Pursuing or completed degree in Education or related field', 'Passion for teaching and social impact', 'Good communication skills', 'Basic proficiency in MS Office'],
    stipend: '₹5,000 - ₹8,000/month',
  },
  {
    id: 2,
    title: 'Communications & Media Intern',
    department: 'Communications',
    description: 'Help amplify our impact through content creation, social media management, and storytelling.',
    duration: '3-6 months',
    location: 'Remote',
    requirements: ['Strong writing and communication skills', 'Experience with social media platforms', 'Basic graphic design skills (Canva/Photoshop)', 'Video editing knowledge is a plus'],
    stipend: '₹4,000 - ₹7,000/month',
  },
  {
    id: 3,
    title: 'Fundraising & Partnerships Intern',
    department: 'Fundraising',
    description: 'Assist in fundraising campaigns, donor research, grant writing, and partnership development.',
    duration: '3 months',
    location: 'Delhi',
    requirements: ['Background in Business, Marketing, or related field', 'Strong analytical skills', 'Excellent interpersonal skills', 'Interest in nonprofit fundraising'],
    stipend: '₹5,000 - ₹8,000/month',
  },
  {
    id: 4,
    title: 'Research & Impact Assessment Intern',
    department: 'Research',
    description: 'Conduct research on program effectiveness, collect and analyze data, and prepare impact reports.',
    duration: '3-6 months',
    location: 'Remote',
    requirements: ['Background in Social Sciences, Statistics, or related field', 'Proficiency in data analysis tools', 'Strong research methodology knowledge', 'Excellent report writing skills'],
    stipend: '₹4,000 - ₹7,000/month',
  },
  {
    id: 5,
    title: 'Community Outreach Intern',
    department: 'Outreach',
    description: 'Work directly with communities to identify needs, coordinate programs, and ensure effective implementation.',
    duration: '3 months',
    location: 'Field-based (Multiple locations)',
    requirements: ['Willingness to travel to rural areas', 'Knowledge of local languages', 'Strong interpersonal skills', 'Understanding of community dynamics'],
    stipend: '₹5,000 - ₹8,000/month',
  },
  {
    id: 6,
    title: 'Web Development Intern',
    department: 'Technology',
    description: 'Help maintain and improve our website and digital platforms to better serve our mission.',
    duration: '3-6 months',
    location: 'Remote',
    requirements: ['Proficiency in HTML, CSS, JavaScript', 'Experience with React.js', 'Knowledge of responsive design', 'Familiarity with CMS platforms'],
    stipend: '₹5,000 - ₹8,000/month',
  },
];
