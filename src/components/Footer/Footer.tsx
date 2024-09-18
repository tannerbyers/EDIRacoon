import React from 'react';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-6 min-w-full">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} EDI Raccoon. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link
            to="/privacy-policy"
            className="text-gray-200 hover:text-white px-4"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-gray-200 hover:text-white px-4"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
