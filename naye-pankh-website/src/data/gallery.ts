export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80', alt: 'Children in classroom', category: 'Education' },
  { id: 2, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'Skill training workshop', category: 'Skill Development' },
  { id: 3, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', alt: 'Community awareness program', category: 'Awareness' },
  { id: 4, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', alt: 'Community development', category: 'Community' },
  { id: 5, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', alt: 'Health camp', category: 'Healthcare' },
  { id: 6, src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80', alt: 'Tree plantation drive', category: 'Environment' },
  { id: 7, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80', alt: 'Education fair', category: 'Events' },
  { id: 8, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', alt: 'Workshop session', category: 'Skill Development' },
  { id: 9, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Fundraising gala', category: 'Events' },
  { id: 10, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', alt: 'Green drive', category: 'Environment' },
  { id: 11, src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', alt: 'Women empowerment', category: 'Community' },
  { id: 12, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', alt: 'Digital literacy', category: 'Education' },
];
