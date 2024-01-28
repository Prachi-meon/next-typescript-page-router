import Link from "next/link";
import { postsProps, postProps } from "../../types/posts.types";

import Head from "next/head";

const Posts = ({ title, description, posts }: postsProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
      </Head>
      <h1>Posts</h1>
      {posts.map((res: postProps) => {
        return (
          <div key={res.id}>
            <h1>
              <Link href={`posts/${res.id}`}>
                {" "}
                {res.id}. {res.title}{" "}
              </Link>
            </h1>
            <p>{res.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await data.json();

  return {
    props: {
      title: "News Channel",
      description: "Display news",
      posts: response.slice(0, 50),
    },
  };
}

export default Posts;
