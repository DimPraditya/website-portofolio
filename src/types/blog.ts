export interface Blog {
  objectId: string;
  title: string;
  category: string;
  description: string;
  content: string;
  thumbnail: string;
  created: number; 
  updated: number | null;
  ownerId: string | null;
  __class: string; 
}
