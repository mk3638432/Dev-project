import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviiders from "../AuthProviiders";

const NavBar = () => {
  const session = {};
  return (
    <nav className="flexbetween navbar ">
      <div className="flex-1 flexStart gap-10  ">
        <Link href="/">
          <Image src="/logo.svg" alt="image" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7  ">
          {NavLinks.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link href={link.href}>{link?.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexcenter gap-4   ">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-projects">
              <p className="btn btn-primary">Share Work</p>
            </Link>
          </>
        ) : (
          <AuthProviiders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
