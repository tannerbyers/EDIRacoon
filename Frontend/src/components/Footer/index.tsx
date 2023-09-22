export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl px-4 mx-auto xl:max-w-6xl divide-y divide-gray-200 sm:px-6 md:px-8">
        <ul className="text-sm font-medium Footer_nav__2rFid  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Company
            </h2>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Newsroom
            </h2>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Products
            </h2>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Connect
            </h2>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-black lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="font-semibold text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="font-semibold tracking-tight text-black text-md transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              © 2023 EDI Racoon.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
