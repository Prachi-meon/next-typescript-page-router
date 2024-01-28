import { GetServerSideProps } from "next";

import { newsData } from "../../data/news";

type newsProps = {
  newOne: {
    id: number;
    title: string;
    description: string;
  };
};

const NewOne = ({ newOne }: newsProps) => {
  return (
    <div>
      <h1>
        {newOne.id}. {newOne.title}
      </h1>
      <p>{newOne.description}</p>
      <hr />
      <h4>Env variables</h4>
      <h5>User: {process.env.DB_USER}</h5>
      <h5>AnalysticID: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h5>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { newsOne }: any = params;
  const data = newsData.find((ele) => ele.id === parseInt(newsOne));
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log("User and Password", user, password);
  // const response = await fetch(`http://localhost:3000/api/news/${newOne}`);
  // const data = await response.json();

  return {
    props: {
      newOne: data,
    },
  };
};

export default NewOne;
