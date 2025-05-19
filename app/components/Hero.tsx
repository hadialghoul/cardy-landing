"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white py-16" id="download">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            The Smartest Way to Manage Your Cards
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Cardy helps you securely store, organize, and access all your loyalty, membership, and payment cards in one place.
          </p>

          <div className="flex gap-4">
            <a
              href="https://apps.apple.com/" 
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/App_Store.png"
                alt="Download on App Store"
                width={150}
                height={50}
                className="hover:scale-105 transition-transform duration-200"
              />
            </a>

            <a
              href="https://play.google.com/store" 
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/Play_Store.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full max-w-md">
          <Image
            src="/main.jpg"
            alt="Cardy App Screenshot"
            width={400}
            height={800}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
