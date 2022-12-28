
export interface FilmT {
  name: string;
  title: string;
  id: string;
  description: string;
  rate: number;
  realiseDate: Date;
  actors: string[];
  directories: string;
  country: string;
  imageURL: string;
  featured: boolean
  genre: Genre[];
}

export enum Genre {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  FANTASY = 'fantasy',
  HORROR = 'horror',
  MUSICALS = 'musicals',
  MYSTERY = 'mystery',
  ROMANCE = 'romance',
  SCIENCE_FICTION = 'science fiction',
  SPORTS = 'sports',
  THRILLER = 'thriller'
}