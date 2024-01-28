import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  return (
    <div className="header">
      <h2>Header</h2>
      <div>
        {!data && (
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            SignIn
          </button>
        )}
        {/* <Link href="api/auth/signin">SignIn</Link> */}
        {data && (
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "http://localhost:3000/" });
            }}
          >
            SignOut
          </button>
        )}
        {/* <Link href="api/auth/signout">SignOut</Link> */}
      </div>
    </div>
  );
};

export default Header;
