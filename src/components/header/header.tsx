"use client";

import Image from "next/image";
import "./styles.css";
import { useAtom } from "jotai";
import { openNavbarAtom } from "@/components/atoms";

export default function Header() {
  const [openNavbar, setOpenNavbar] = useAtom(openNavbarAtom);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  return (
    <>
      <header className="mb-8">
        <div className="md:container xl:max-w-5xl mx-auto flex flex-col">
          <div className="flex justify-between w-full">
            <div className="brand-logo px-4 pt-4 md:p-4">
              <a
                className="pointer-events-none place-items-center"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/DGSHAPE_Logo.png"
                  alt="DGSHAPE Logo"
                  className="dark:invert"
                  width={200}
                  height={42}
                  priority
                />
              </a>
            </div>
            <div className="flex items-center px-4 pt-4 md:p-4">
              <div className="mr-4">
                <a href="#">EN</a>
              </div>
              <div className="mr-4 md:mr-0">
                <a href="#">JP</a>
              </div>

              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center px-2 w-10 h-10 justify-center text-sm text-gray-100 bg-gray-500 md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <nav
            className={`${
              openNavbar ? "hidden" : "active"
            } md:block ease-in duration-300`}
            id="navbar-default"
          >
            <ul className="flex flex-col text-lg px-4 md:flex-row md:justify-between md:text-base">
              <li className="p-8 bg-gray-500 text-gray-100 text-center md:p-0 md:bg-transparent md:text-gray-500">
                <a href="#">オンラインショップ</a>
              </li>
              <li className="p-8 bg-gray-500 text-gray-100 text-center md:p-0 md:bg-transparent md:text-gray-500">
                <a href="#">製品</a>
              </li>
              <li className="p-8 bg-gray-500 text-gray-100 text-center md:p-0 md:bg-transparent md:text-gray-500">
                <a href="#">サポート</a>
              </li>
              <li className="p-8 bg-gray-500 text-gray-100 text-center md:p-0 md:bg-transparent md:text-gray-500">
                <a href="#">ニュース</a>
              </li>
              <li className="p-8 bg-gray-500 text-gray-100 text-center md:p-0 md:bg-transparent md:text-gray-500">
                <a href="#">企業情報</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
