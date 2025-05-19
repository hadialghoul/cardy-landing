"use client";

const steps = [
  {
    number: 1,
    title: "Download the App",
    description: "Get Cardy from the App Store or Google Play and install it on your device.",
  },
  {
    number: 2,
    title: "Add Your Cards",
    description: "Easily scan or import your cards into your secure digital wallet.",
  },
  {
    number: 3,
    title: "Tap & Use Anywhere",
    description: "Access and use your cards anytime, even without internet.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Cardy Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Get started with Cardy in three simple steps. It’s fast, secure, and effortless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-300 text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
