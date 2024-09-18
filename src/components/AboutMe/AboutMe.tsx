// src/pages/AboutMe.tsx
import React from 'react';

import TannerPic from '../../assets/tanner.jpg';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#111827] text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Who Made this?
        </h1>
        <section className="bg-gray-800 p-6 rounded-md shadow-md">
          <div className="flex flex-wrap items-center mb-6">
            <div className="min-w-64 w-1/6">
              <img src={TannerPic} alt="Tanner Byers" className="p-4 m-4" />
            </div>
            <div className="ml-6 w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Hey, I'm Tanner Byers
              </h2>
              <p className="mb-4">
                With 5ish years of experience in cloud and full-stack
                development, I've had the privilege of working with some
                incredible people at AWS, Availity, Glidian, and PayForTime.
                Each of these experiences has shaped my approach to solving
                complex challenges and innovating in the EDI space.
              </p>
              <p className="mb-4">
                At AWS, I honed my skills in cloud services. My time at Availity
                and Glidian provided me with deep insights into healthcare IT,
                where I developed my love for EDI.
              </p>
              <p className="mb-4">
                These experiences culminated in the creation of EDI Raccoon, a
                product designed to address and innovate solutions for EDI
                (Electronic Data Interchange) problems. By combining my
                expertise in cloud technology with my understanding of
                healthcare IT, EDI Raccoon is poised to help companies
                effectively manage and leverage their EDI data, offering a
                modern and efficient approach to cloud-based EDI storage
                solutions.
              </p>
              <p className="mb-4">
                If you’re interested in learning more or collaborating, feel
                free to{" "}
                <a
                  href="mailto:programtanner@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  get in touch
                </a>
                . I’m always excited to connect with others and explore new
                opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
