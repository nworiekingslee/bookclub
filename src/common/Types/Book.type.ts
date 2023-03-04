export type BookType = {
  image: string;
  title: string;
  author: string;
  desc: string;
  genres: string[];
  rating: number;
  myRate: null | number;
  "total-ratings": number;
  status: string | null;
};

export type BookListType = BookType[];
