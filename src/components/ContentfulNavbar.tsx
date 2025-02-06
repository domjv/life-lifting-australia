import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ContentfulNavbarType } from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ContentfulNavbarProps {
  navbar: ContentfulNavbarType;
}

export default function ContentfulNavbar({ navbar }: ContentfulNavbarProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return <div className="w-28 h-14" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const { logoLight, logoDark, logoLink, navbarItems, specialNavbarItem } =
    navbar;

  return (
    <nav
      className={`
      sticky top-0 w-full z-50 transition-all duration-200
      ${
        isScrolled
          ? "shadow-lg bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg"
          : "bg-white dark:bg-gray-950"
      }
    `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={logoLink.hyperlink} className="flex-shrink-0">
            <span className="block h-8 w-auto">
              {currentTheme === "dark" ? (
                <Image
                  src={`${logoDark.url}`}
                  alt={logoDark.description}
                  title={logoDark.description}
                  width={110}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : (
                <Image
                  src={`${logoLight.url}`}
                  alt={logoLight.description}
                  title={logoDark.description}
                  width={110}
                  height={32}
                  className="h-8 w-auto"
                />
              )}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navbarItems.listOfLinksCollection.items.map((link) => (
              <ContentfulLink
                key={link.name}
                link={link}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              />
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-4">
            <ThemeChanger
              helperText={navbar.helperTextForDarkLightModeSwitch}
            />

            <div className="hidden lg:block">
              <ContentfulLink
                link={specialNavbarItem}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
              />
            </div>

            {/* Mobile menu button */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`${open ? "hidden" : "block"} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className={`${open ? "block" : "hidden"} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Disclosure.Button>

                  {/* Mobile menu panel */}
                  <Disclosure.Panel className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-lg">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                      {navbarItems.listOfLinksCollection.items.map((link) => (
                        <ContentfulLink
                          key={link.name}
                          link={link}
                          className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                        />
                      ))}
                      <ContentfulLink
                        link={specialNavbarItem}
                        className="block w-full text-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </nav>
  );
}
