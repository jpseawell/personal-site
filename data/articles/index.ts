export interface Article {
  id: number;
  date: string;
  title: string;
  content: string;
}

export const articles: { [key: string]: Article } = {
  about: {
    id: 1,
    date: "2023-06-14T15:00:00-05:00",
    title: "About me",
    content: "lorem ipsum dolor",
  },
};
