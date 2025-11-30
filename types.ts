export interface Artist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface PortfolioItem {
  id: number;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}