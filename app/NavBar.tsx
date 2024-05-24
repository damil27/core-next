import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
    const links = [
        {label: "Dashboard", href:"/"},
        {label: "Issue", href:"/"},
    ]
  return (
    <nav className="flex border-b space-x-6 h-14 items-center p-8 mb-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
              {links.map(link => <Link key={link.label} href={link.href} className=" text-zinc-500 hover:text-zinc-800 transition-colors" >{link.label }</Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;
