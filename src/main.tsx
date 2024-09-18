import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Footer from './components/Footer/Footer.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import ContactUs from './pages/ContactUs/ContactUs.tsx';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import Pricing from './pages/Pricing/Pricing.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <LandingPage />
        <Footer />
      </>
    ),
  },
  {
    path: "privacy-policy",
    element: (
      <>
        <NavBar />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "terms-of-service",
    element: (
      <>
        <NavBar />
        <TermsOfService />
        <Footer />
      </>
    ),
  },
  {
    path: "pricing",
    element: (
      <>
        <NavBar />
        <Pricing />
        <Footer />
      </>
    ),
  },
  {
    path: "contact-us",
    element: (
      <>
        <NavBar />
        <ContactUs />
        <Footer />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
