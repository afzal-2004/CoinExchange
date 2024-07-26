import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <footer className="rounded-lg shadow bg-white  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Quantam Coin
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 ">
            <li>
              <HashLink to="#about" className="hover:underline me-4 md:me-6">
                About
              </HashLink>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200  w-full dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Quantam coin
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
