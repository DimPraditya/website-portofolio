"use client";

import { bebasNeue } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  return (
    <nav className="container p-4 mx-auto  flex justify-between items-center text-white bg-green-800 max-w-full">
      <Link href="/">
        <p className={`text-2xl font-bold ${bebasNeue.className}`}>
          KOPI TITIK
        </p>
      </Link>

      <div className="flex items-center gap-4 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/blog">Blog</Link>
        {user ? (
          <>
            <Link href="/write">Create Blog</Link>
            <Button className="text-white font-semibold" variant={"default"} onClick={clearAuth}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/sign-in">Sign-in</Link>
            <Link href="/sign-up">Sign-up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
