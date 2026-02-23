export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  volume?: string;
  category: 'coffee' | 'tea' | 'desserts' | 'breakfast';
  image?: string;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    city: string;
    street: string;
    mapIframe: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
  contacts: {
    phone: string;
    instagram: string;
    email?: string;
  };
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}
