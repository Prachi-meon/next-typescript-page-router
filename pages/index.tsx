import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2 className="app_title text-center pt-5 mt-5">
        Welcome to Next Page Router --TypeScript App
      </h2>
      <h3>
        <Link href="/posts">Posts</Link>
      </h3>
      <h3>
        <Link href="/blogs">Blogs</Link>
      </h3>
      <h3>
        <Link href="/news">News</Link>
      </h3>
      <h3>
        <Link href="/images">Images</Link>
      </h3>
      <h3>
        <Link href="/preview">CMS Page</Link>
      </h3>
    </main>
  );
}
