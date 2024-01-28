import type { ReactElement } from "react";
import Link from "next/link";
import Footer from "../components/layout/footer";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>

      <h3>
        <Link href="blogs/firstBlog">First Blog</Link>
      </h3>
      <h3>
        <Link href="blogs/secondBlog">Second Blog</Link>
      </h3>
    </div>
  );
};

export default Blogs;

Blogs.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
