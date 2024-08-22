"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const HomeNavbar: FC<Record<string, never>> = function () {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["mission", "project", "partner", "certificate"];
      let activeSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop - 150 &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          activeSection = section;
          break;
        }
      }

      setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header dir="rtl">
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="flex flex-row items-center justify-between w-full relative p-3">
          <div className="flex-1">
            <Navbar.Brand href="/">
              <Image
                alt="WLMF logo"
                src="/img/logo1.webp"
                width="32"
                height="32"
                priority
              />
              <span className="self-end whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                WLMF
              </span>
            </Navbar.Brand>
          </div>
          <Navbar.Collapse
            dir="ltr"
            className={twMerge(
              "flex-1 w-full order-last md:order-none [&>ul]:md:text-base px-8 md:px-0 [&>ul>li]:pb-4 [&>ul>li]:md:pb-0",
              navbarExpanded
                ? "absolute top-14 left-0 block bg-white md:static"
                : "hidden"
            )}
          >
            <Navbar.Link href="/" active={pathname === "/" && !activeSection}>
              Home
            </Navbar.Link>
            <Navbar.Link href="#mission" active={activeSection === "mission"}>
              Mission
            </Navbar.Link>
            <Navbar.Link href="#project" active={activeSection === "project"}>
              Projects
            </Navbar.Link>
            <Navbar.Link href="#partner" active={activeSection === "partner"}>
              Partners
            </Navbar.Link>
            <Navbar.Link
              href="#certificate"
              active={activeSection === "certificate"}
            >
              Certificates
            </Navbar.Link>
          </Navbar.Collapse>
          <div className="flex md:flex-1 md:justify-end">
            <Navbar.Toggle
              className="focus:outline-none focus:ring-0 p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setNavbarExpanded(!navbarExpanded)}
              barIcon={navbarExpanded ? HiX : HiMenuAlt1}
            />
          </div>
        </div>
      </Navbar>
    </header>
  );
};
