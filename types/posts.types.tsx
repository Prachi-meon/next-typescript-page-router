export type postsProps = {
  title: string;
  description: string;
  posts: Array<postProps>;
};

export type postProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
