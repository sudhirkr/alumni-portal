export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Meetup' | 'Talk' | 'Reunion' | 'Workshop';
}

export interface AlumniProfile {
  id: string;
  name: string;
  gradYear: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}