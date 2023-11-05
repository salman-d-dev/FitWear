import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="shadow-2xl">
      <footer className="text-gray-600 body-font bg-slate-200">
        <div className="container px-5 py-2 md:py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center">
            <div className="flex title-font font-bold items-center md:justify-center justify-center text-red-900">
              <Link href="/">
                <div className="hidden sm:block md:block lg:block">
                  <Image
                    src="/fitlogo3-removebg-preview.png"
                    alt="FitWear logo"
                    width={200}
                    height={100}
                    style={{ height: "8rem", width: "8rem" }}
                  />
                </div>
              </Link>
            </div>
            <div className="mt-3">
            <p>A Fit-Wear product</p>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 md:border-l-2 md:border-black">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                SHOP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/tshirts" className="text-gray-600 hover:text-purple-600">
                    T-Shirts
                  </a>
                </li>
                <li>
                  <a href="/hoodies" className="text-gray-600 hover:text-purple-600">
                    Hoodies
                  </a>
                </li>
                <li>
                  <a href="/mugs"  className="text-gray-600 hover:text-purple-600">
                    Mugs
                  </a>
                </li>
                <li>
                  <a href="/stickers" className="text-gray-600 hover:text-purple-600">
                    Stickers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden md:block md:border-l-2 md:border-black">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                POLICY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden md:block md:border-l-2 md:border-black">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                SOCIAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden md:block md:border-l-2 md:border-black">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                ABOUT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-cyan-600">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-slate-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-700 text-sm text-center sm:text-left">
              © 2023 FitWear.com —
              <a
                href="https://github.com/salman-at-github"
                rel="noopener noreferrer"
                className="text-gray-700 ml-1"
                target="_blank"
              >
                @Ryo
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a target="_blank" href={"https://www.facebook.com"} className="text-gray-800 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a target="_blank" href={"https://www.x.com"} className="ml-3 text-gray-800 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a target="_blank" href={"https://www.instagram.com"} className="ml-3 text-gray-800 hover:text-cyan-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a target="_blank" href={"https://www.linkedin.com/in/salman-khan-a2957925b"} className="ml-3 text-gray-800 hover:text-cyan-600">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
