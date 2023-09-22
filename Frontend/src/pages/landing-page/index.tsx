import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { FC } from 'react'
import img1 from '../../assets/images/iPhone-12-Mockup.png'
import img2 from '../../assets/images/tailwind.svg'
import img3 from '../../assets/images/aws.svg'
import img4 from '../../assets/images/stripe.svg'
import img5 from '../../assets/images/Data Arranging_Outline.svg'
import img6 from '../../assets/images/react.svg'
import racoonSVG from '../../assets/images/racoon.svg'
interface landingPage {
  title: string
}

const LandingPage: FC<landingPage> = ({ title }) => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="flex flex-col items-center px-5 py-24 mx-auto max-w-7xl md:flex-row">
          <div className="flex flex-col items-center pt-6 mb-40 text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
            <h1 className="items-center mb-5 text-5xl text-gray-900 sm:text-6xl Avenir xl:w-2/2">
              EDI Processing for the Modern Age
            </h1>
            <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
              Lightning-fast and easy-to-use EDI parsing, splitting, validation,
              and configuring for any EDI format.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white bg-transparent bg-gray-900 border rounded-lg transition duration-500 ease-in-out transform"
                href="/#/login"
              >
                <span className="justify-center">Sign Up</span>
              </a>
            </div>
          </div>
          <div className="mb-0 mr-48 xl:mr-44 sm:mr-0 sm:mb-28 lg:mb-0 md:pl-10">
            <img
              className="ml-24 w-80 md:ml-1"
              alt="iPhone-12"
              src={racoonSVG}
            ></img>
          </div>
        </div>
        <section className="mx-auto" style={{ background: '#f5f6fe' }}>
          <div className="container w-1/2 p-5 mx-auto lg:p-24 ">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
              <h1 className="mb-8 text-4xl font-semibold text-black Avenir ">
                Leveraging top-tier technologies
              </h1>
            </div>
            <div className="m-8 text-center grid lg:grid-cols-4 sm:grid-cols-1">
              <div className="flex items-center justify-center sm:pb-10">
                <img
                  src={img3}
                  alt="AWS Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center sm:pb-8">
                <img
                  src={img6}
                  alt="React Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center sm:pb-4">
                <img
                  src={img2}
                  alt="Tailwind Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={img4}
                  alt="Stripe Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-20 mx-auto text-center  max-w-7xl">
          <h1 className="mb-8 text-6xl font-semibold text-gray-900 Avenir">
            Less Code, More Customization.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 Avenir">
            A simple UI to setup your trading partners and their EDI
            transactions in a standardized process that is also highly
            customizable and secure.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <img
              className="object-cover object-center w-3/4 mb-10 border rounded-lg shadow-md g327"
              alt="Placeholder Image"
              src={img5}
            ></img>
          </div>
        </div>
        <section className="relative">
          <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 Avenir">
                Sign up for our beta!
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 mb-9">
                Enter your email address and get our updates straight away.
              </h1>
              <input
                placeholder="jack@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="w-1/4 py-3 pl-2 pr-2 mt-2 font-semibold text-gray-800 border border-gray-600 rounded-md hover:border-gray-900"
              ></input>{' '}
              <a
                className="inline-flex items-center py-3 mt-2 ml-2 font-medium text-white bg-transparent bg-gray-900 border rounded-lg px-14 transition duration-500 ease-in-out transform"
                href="/"
              >
                <span className="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage
