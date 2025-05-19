"use client";

import { Apple, Android } from "@mui/icons-material";

const DownloadCTA = () => {
  return (
    <section className="bg-blue-300 text-white py-16 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Headline & Subtext */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Cardy Today</h2>
        <p className="text-white/90 mb-8">
          Organize all your cards digitally and enjoy fast, secure, and smart access — anywhere, anytime.
        </p>

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.brainkets.cardy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-300 transition"
          >
            <Android />
            Google Play
          </a>
          <a
            href="https://apps.apple.com/us/app/cardyapp/id6636475785"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-300 transition"
          >
            <Apple />
            App Store
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center text-sm sm:text-base gap-6 text-white/80">
          <span>100+ Downloads</span>
          <span className="border-l border-white h-4" />
          <span>3+ Age Rating</span>
          <span className="border-l border-white h-4" />
          <span>All Devices</span>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
