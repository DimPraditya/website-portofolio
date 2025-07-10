"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { bebasNeue } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import { Button } from "./ui/button";
import clsx from "clsx";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-green-800 text-white transition-transform duration-300",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <div className="container p-4 mx-auto flex justify-between items-center max-w-full">
        {/* Logo */}
        <Link href="/">
          <p className={`text-2xl font-bold ${bebasNeue.className}`}>
            KOPI TITIK
          </p>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 font-semibold">
          <Link href="/" className="hover:text-green-300 transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-green-300 transition-colors">
            About Us
          </Link>
          <Link href="/products" className="hover:text-green-300 transition-colors">
            Products
          </Link>
          <Link href="/teams" className="hover:text-green-300 transition-colors">
            Teams
          </Link>
          <Link href="/blog" className="hover:text-green-300 transition-colors">
            Blog
          </Link>
          {user ? (
            <>
              <Link href="/write" className="hover:text-green-300 transition-colors">
                Create Blog
              </Link>
              <Button
                className="text-white hover:text-green-300 transition-colors font-semibold"
                onClick={clearAuth}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="hover:text-green-300 transition-colors">
                Sign-in
              </Link>
              <Link href="/sign-up" className="hover:text-green-300 transition-colors">
                Sign-up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 flex flex-col gap-3 font-semibold z-40">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>
            Teams
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          {user ? (
            <>
              <Link href="/write" onClick={() => setMenuOpen(false)}>
                Create Blog
              </Link>
              <Button
                className="text-white font-semibold"
                onClick={() => {
                  clearAuth();
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={() => setMenuOpen(false)}>
                Sign-in
              </Link>
              <Link href="/sign-up" onClick={() => setMenuOpen(false)}>
                Sign-up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
