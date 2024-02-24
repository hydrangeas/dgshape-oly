"use client";

import { openNavbarAtom } from "@/components/atoms";
import Header from "@/components/header/header";
import { useAtom } from "jotai";

export default function Home() {
  const [openNavbar, setOpenNavbar] = useAtom(openNavbarAtom);
  return (
    <div className={openNavbar ? "" : "fullscreen-menu bg-gray-500"}>
      <Header />
      <h1>Home</h1>
      <div>test</div>
    </div>
  );
}
