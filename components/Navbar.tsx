"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/landing" ? "text-white border-b" : ""}`} href="/landing">true.</a>
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">verify claim</a>
    </nav>
  );
}