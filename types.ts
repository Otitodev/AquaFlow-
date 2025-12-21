
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
