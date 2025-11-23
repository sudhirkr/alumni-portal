import { Event, AlumniProfile, NewsItem, Photo } from './types';

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Annual Alumni Reunion 2025',
    date: 'Aug 15, 2025',
    time: '10:00 AM - 5:00 PM',
    location: 'CMI Campus, Siruseri',
    description: 'Join us for a day of nostalgia, networking, and celebrating our shared history. Lunch included.',
    category: 'Reunion',
  },
  {
    id: '2',
    title: 'Tech Talk: AI in Mathematics',
    date: 'Sept 05, 2025',
    time: '6:00 PM - 7:30 PM',
    location: 'Online (Zoom)',
    description: 'Dr. Rajesh Kumar (Batch 2010) discusses the intersection of Deep Learning and Algebraic Geometry.',
    category: 'Talk',
  },
  {
    id: '3',
    title: 'Bangalore Chapter Meetup',
    date: 'Sept 20, 2025',
    time: '7:00 PM',
    location: 'Indiranagar, Bangalore',
    description: 'Casual mixer for alumni residing in Bangalore. Drinks and appetizers provided.',
    category: 'Meetup',
  },
  {
    id: '4',
    title: 'Career Mentorship Workshop',
    date: 'Oct 02, 2025',
    time: '11:00 AM',
    location: 'Hybrid / CMI Auditorium',
    description: 'Help current students navigate their career paths in academia and industry.',
    category: 'Workshop',
  },
];

export const ALUMNI_HIGHLIGHTS: AlumniProfile[] = [
  {
    id: '1',
    name: 'Priya Sundar',
    gradYear: '2012',
    role: 'Senior Research Scientist',
    company: 'DeepMind',
    quote: 'CMI taught me how to think rigorously. That foundation has been invaluable in my AI research.',
    imageUrl: 'https://picsum.photos/id/64/400/400',
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    gradYear: '2015',
    role: 'Founder & CEO',
    company: 'QuantFin Solutions',
    quote: 'The network I built at CMI helped me find my co-founders and my first investors.',
    imageUrl: 'https://picsum.photos/id/91/400/400',
  },
  {
    id: '3',
    name: 'Dr. Sarah Thomas',
    gradYear: '2009',
    role: 'Professor of Mathematics',
    company: 'University of Chicago',
    quote: 'Returning to campus always feels like coming home. The intellectual vibrancy is unmatched.',
    imageUrl: 'https://picsum.photos/id/342/400/400',
  },
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: '1',
    title: 'Alumni-Student Mentorship Program 2025',
    date: 'July 10, 2025',
    summary: 'Applications are now open for the new academic year mentorship cycle.',
    category: 'Program Launch',
  },
  {
    id: '2',
    title: 'New Research Wing Inauguration',
    date: 'June 28, 2025',
    summary: 'Funded partly by generous alumni donations, the new wing opens next month.',
    category: 'Campus News',
  },
  {
    id: '3',
    title: 'Prof. Seshadri Memorial Lecture',
    date: 'May 15, 2025',
    summary: 'A recap of the inspiring lecture delivered by Fields Medalist Dr. M. Bhargava.',
    category: 'Academic',
  },
];

export const GALLERY_PHOTOS: Photo[] = [
  { id: '1', url: 'https://picsum.photos/id/20/800/600', caption: 'Library Study Session' },
  { id: '2', url: 'https://picsum.photos/id/180/800/600', caption: '2023 Graduation Ceremony' },
  { id: '3', url: 'https://picsum.photos/id/370/800/600', caption: 'Campus Greenery' },
  { id: '4', url: 'https://picsum.photos/id/435/800/600', caption: 'Cultural Night' },
  { id: '5', url: 'https://picsum.photos/id/534/800/600', caption: 'Alumni Cricket Match' },
  { id: '6', url: 'https://picsum.photos/id/651/800/600', caption: 'Symposium 2024' },
];