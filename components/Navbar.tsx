"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/landing" ? "text-white border-b" : ""}`} href="/landing">TruthToken</a>
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">Verify Claim</a>
      <a className={`mr-4 ${pathname === "/graph" ? "text-white border-b" : ""}`} href="/graph">Graph</a>
      <a className={`mr-4 ${pathname === "/about" ? "text-white border-b" : ""}`} href="/about">About</a>
    </nav>
  );
}