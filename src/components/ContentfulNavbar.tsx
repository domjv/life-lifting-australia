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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-28 h-14" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const { logoLight, logoDark, logoLink, navbarItems, specialNavbarItem } =
    navbar;

  return (
    <nav className="container relative max-w-full flex items-center justify-between p-2 lg:justify-between xl:px-1 bg-white dark:bg-trueGray-900 shadow-md">
      <Link href={logoLink.hyperlink}>
        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <span>
            {currentTheme === "dark" ? (
              <Image
                src={`${logoDark.url}`}
                alt={logoDark.description}
                title={logoDark.description}
                width={110}
                height={32}
              />
            ) : (
              <Image
                src={`${logoLight.url}`}
                alt={logoLight.description}
                title={logoDark.description}
                width={110}
                height={32}
              />
            )}
          </span>
        </span>
      </Link>

      <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <ThemeChanger helperText={navbar.helperTextForDarkLightModeSwitch} />
        <div className="hidden mr-3 lg:flex nav__item">
          <ContentfulLink
            link={specialNavbarItem}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          />
        </div>
      </div>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              aria-label="Toggle Menu"
              className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </Disclosure.Button>

            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                {navbarItems.listOfLinksCollection.items.map((link) => (
                  <ContentfulLink
                    key={link.name}
                    link={link}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  />
                ))}
                <ContentfulLink
                  link={specialNavbarItem}
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                />
              </>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Desktop menu */}
      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navbarItems.listOfLinksCollection.items.map((link) => (
            <li className="mr-3 nav__item" key={link.name}>
              <ContentfulLink
                link={link}
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
