"use client";

import { Card, CardContent } from "@mui/material";
import { CreditCard, Lock, PhoneIphone, Backup } from "@mui/icons-material";

const features = [
  {
    title: "All Cards in One",
    description: "Store loyalty, payment, and ID cards digitally in one place.",
    icon: CreditCard,
  },
  {
    title: "Secure & Encrypted",
    description: "Your data is protected with bank-level security.",
    icon: Lock,
  },
  {
    title: "Offline Access",
    description: "Access your cards anytime, even without internet.",
    icon: PhoneIphone,
  },
  {
    title: "Cloud Backup",
    description: "Never lose your cards with automatic cloud sync.",
    icon: Backup,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Everything you need to organize your digital wallet in one powerful app.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return(
            <Card
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="bg-red-500 text-white rounded-full p-3 mb-4">
                  <Icon fontSize="large" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
            )
})}
        </div>
      </div>
    </section>
  );
};

export default Features;
