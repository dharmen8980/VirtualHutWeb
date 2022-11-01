import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className='my-1'>
            <Link href="/" className = "font-extrabold  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white ">
            Virtual Hut</Link>
            </div>          
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center text-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-9 md:space-y-0 text-lg">
                <li className="text-white hover:shadow-lg hover:text-lg hover:bg-sky-700 p-2 rounded-lg">
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li className="text-white hover:shadow-lg hover:text-lg hover:bg-sky-700 p-2 rounded-lg">
                  <Link href="/progress" passHref>
                    Progress
                  </Link>
                </li>
                <li className="text-white hover:shadow-lg hover:text-lg hover:bg-sky-700 p-2 rounded-lg">
                  <Link href="/about" passHref>
                    About US
                  </Link>
                </li>
                <li className="text-white hover:shadow-lg hover:text-lg hover:bg-sky-700 p-2 rounded-lg">
                  <Link href="/team" passHref>
                    Our Team
                  </Link>
                </li>
                <li className="text-white hover:shadow-lg hover:text-lg hover:bg-sky-700 p-2 rounded-lg">
                  <Link href="/contact" passHref>
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
