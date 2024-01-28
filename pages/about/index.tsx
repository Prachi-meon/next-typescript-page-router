import { getSession } from "next-auth/react";

const About = ({ data }: { data: string }) => {
  return <h2>{data}</h2>;
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/about`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? "List of personalized blog" : "list of free blogs",
    },
  };
}

export default About;
