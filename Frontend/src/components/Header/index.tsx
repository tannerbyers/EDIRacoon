import React from 'react'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <div className="top-0 z-30 w-full  clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl tracking-tighter text-gray-900 Avenir md:text-4x1 lg:text-3xl">
              EDI Racoon
            </h1>
          </a>
          <button
            className="px-3 py-1 leading-none text-white outline-none cursor-pointer md:hidden focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
                <a
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white bg-transparent bg-gray-900 rounded-lg transition duration-500 ease-in-out transform text-md md:mt-0 md:ml-4"
                  href="/#/login"
                >
                  <span className="justify-center">Login</span>
                  <svg
                    className="flex w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
