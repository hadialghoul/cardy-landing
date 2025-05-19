"use client";

import { CheckCircle } from "@mui/icons-material";

const benefits = [
  "Easy to use and intuitive interface",
  "Works across all your devices",
  "Bank-level security & encryption",
  "Fast syncing with cloud backup",
  "No ads, just clean experience",
];

const WhyChooseCardy = () => {
  return (
    <section id="why-cardy" className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text and bullets */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Cardy?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            We provide more than just storage — Cardy simplifies your daily life.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-300 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

       <div className="grid grid-cols-2 gap-4">
          {["/image1.jpeg", "/image2.jpeg", "/image3.jpeg", "/image4.jpeg"].map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={src}
                alt={`Cardy feature ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
    </div>
      </div>
    </section>
  );
};

export default WhyChooseCardy;
