import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { postsProps, postProps } from "../../types/posts.types";

const PostId = ({ post }: any) => {
  const router = useRouter();
  const postId = router.query.postId;
  return (
    <div>
      <h1>{postId}</h1>
      <h2>
        {post.title} - {post.body}
      </h2>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post: postProps) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths: [...paths],
    fallback: false,
  };

  // return {
  //   paths: [
  //     { params: { postId: '1' } },
  //     { params: { postId: '2' } },
  //     { params: { postId: '3' } }
  //   ],
  //   fallback: true
  // }
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

export default PostId;
