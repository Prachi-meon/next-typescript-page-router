//When called, getSession() will send a request to /api/auth/session and returns a promise with a session object, or null if no session exists.
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";

type newsProps = {
  id: number;
  title: string;
  description: string;
};

const News = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const handleFetch = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    setNews(data);
  };

  const handleSubmit = async () => {
    if (title !== "" && desc !== "") {
      const response = await fetch("/api/news", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: desc,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <>
        {news.map((newOne: newsProps) => {
          return (
            <div key={newOne.id}>
              <Link href={`/news/${newOne.id}`}>
                <h1>
                  {newOne.id}. {newOne.title}
                </h1>
              </Link>
              <p>{newOne.description}</p>
              <hr />
            </div>
          );
        })}

        <h1>Add New</h1>
        <label>title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>description</label>
        <input type="text" onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleFetch}>Fetch news</button>
        <button onClick={handleSubmit}>Submit</button>
      </>
    </div>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/news");
//   const data = await response.json();

//   return {
//     props: {
//       news: data,
//     },
//   };
// }

export default News;
