import Link from "next/link";
import { bebasNeue } from "@/lib/fonts";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 px-4">
      <div className="container mx-auto grid gap-6 md:grid-cols-4 sm:grid-cols-2 text-xs">
        {/* Logo and Tagline */}
        <div>
          <h2 className={`text-xl font-bold mb-1 ${bebasNeue.className}`}>
            KOPI TITIK
          </h2>
          <p className="text-gray-200 leading-snug">
            Brewed with care, crafted for you. <br />
            100% Indonesian coffee.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-1">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold mb-1">Contact</h3>
          <ul className="space-y-1 text-gray-200">
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Jakarta, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> info@kopititik.co.id
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-base font-semibold mb-1">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-6 pt-4 text-center text-[10px] text-gray-300">
        © {new Date().getFullYear()} Kopi Titik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
