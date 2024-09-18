// src/components/LandingPage.tsx
import React from 'react';

import { Link } from 'react-router-dom';

import RacoonInSpaceImage from '../../assets/racoon_in_space_no_bg.png';
import AboutMe from '../../components/AboutMe/AboutMe';

const LandingPage: React.FC = () => {
  return (
    <div className="text-gray-100 bg-[#111827] flex flex-col">
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Elevate Your EDI Transaction Storage
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-300">
            Discover a solution designed for cost-effectiveness, fast access,
            and intelligent data management.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 max-w-lg">
              <section id="features" className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                  <h2 className="text-2xl font-semibold text-center mb-8 text-white">
                    Why Choose EDI Raccoon?
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-800 text-gray-100 p-6 rounded-md shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        Fast & Cheap Retrieval
                      </h3>
                      <p>
                        Access your most recent EDI transactions quickly and
                        affordably. Our system prioritizes recent data and
                        transitions older data to more economical storage
                        options.
                      </p>
                    </div>
                    <div className="bg-gray-800 text-gray-100 p-6 rounded-md shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        Intelligent Storage Tiering
                      </h3>
                      <p>
                        Optimize storage costs with our automated tiering
                        system. Data is seamlessly moved between storage tiers
                        based on access patterns to ensure efficient management.
                      </p>
                    </div>
                    <div className="bg-gray-800 text-gray-100 p-6 rounded-md shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        Powerful Search Capabilities
                      </h3>
                      <p>
                        Find what you need with advanced search options. Filter
                        by tags like transaction type, patient name, and date
                        submitted to streamline your data management.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="flex-1 max-w-lg pt-20">
              <img
                className="w-full h-auto rounded-lg"
                src={RacoonInSpaceImage}
                alt="Racoon in Space"
              />
            </div>
          </div>
          <div className="mt-8 space-x-4 flex justify-center">
            <Link
              to="/pricing"
              className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-400 transition"
            >
              Pricing
            </Link>
            <Link
              to="/contact-us"
              className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition"
            >
              Sign Up for Beta!
            </Link>
          </div>
        </div>
      </section>
      <AboutMe />
    </div>
  );
};

export default LandingPage;
