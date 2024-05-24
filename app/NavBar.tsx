import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex border-b space-x-6 h-14 items-center p-8">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/"> Issue</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
