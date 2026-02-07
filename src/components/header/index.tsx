
'use client';
import rasm  from "../../../public/img/Logo.png"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";


import { FiSearch } from "react-icons/fi";
import { IoBookmarksOutline } from "react-icons/io5";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";


interface Language {
  code: string;
  name: string;
}

interface MenuItem {
  href: string;
  label: string;
}

const Header = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const languages: Language[] = [
    { code: 'uz', name: 'UZ' },
    { code: 'ya', name: 'Ўз' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
  ];

  const menuItems: MenuItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Login' },
    { href: '/mashina', label: 'Mashina' },
    { href: '/qurilish', label: 'Qurilish' },
    { href: '/user', label: 'User' },
    { href: '/uskuna', label: 'Uskuna' },
  ];

  return (
    <header className="bg-blue-900 text-white">
      {/* TOP BAR */}
      <div className="border-b border-blue-800">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-2 flex justify-between items-center text-sm">
          {/* CITY */}
          <div className="relative">
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-300 transition"
              onBlur={() => setTimeout(() => setIsCityDropdownOpen(false), 200)}
            >
              Toshkent
              <svg
                className={`w-4 h-4 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCityDropdownOpen && (
              <div className="absolute mt-1 w-32 bg-white text-gray-800 rounded shadow-lg z-50">
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Toshkent</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Qashqadaryo</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Buxoro</button>
              </div>
            )}
          </div>

          {/* LANG */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="bg-blue-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700"
              onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
            >
              uz
              <svg
                className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-1 w-20 bg-white text-gray-800 rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 md:gap-3">

          <Image src={rasm} alt="da'dladklalkdkl" />

          <h1 className="text-xs md:text-sm leading-snug max-w-xs md:max-w-md hidden md:block">
            Qurilishda texnik me'yorlash va standartlashtirish ilmiy-tadqiqot instituti
          </h1>
        </div>

        {/* DESKTOP ICONS - faqat desktop da */}
        <div className="hidden md:flex items-center gap-4 md:gap-6">
          

               <FiSearch />
               <IoBookmarksOutline />
               <RiInboxArchiveLine  className="size-5"/>


          <div className="flex items-center gap-2 cursor-pointer">
           
              <FaRegUser />
            <div className="text-xs">
              <div>User</div>
            </div>
          </div>
        </div>

        {/* HAMBURGER BUTTON (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white mb-1 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white mb-1 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* MENU BAR */}
      <nav className="border-t border-blue-800">
        {/* Desktop Menu */}
        <div className="hidden md:block max-w-[1440px] mx-auto px-4 md:px-6">
          <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 py-3 md:py-4 text-xs md:text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu - 360px da ishlaydi */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-4 bg-blue-900 border-t border-blue-800">
            <ul className="flex flex-col gap-3 text-base font-medium">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? 'text-blue-400 font-semibold'
                        : 'text-white hover:text-blue-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;