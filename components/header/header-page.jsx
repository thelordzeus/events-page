import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <img />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About us</Link>
        </nav>
      </header>
    </>
  );
}
