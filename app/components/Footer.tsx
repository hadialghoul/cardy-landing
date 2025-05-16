
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="/logo.png" alt="Cardy Logo" className="w-6 h-6" />
          <span className="text-sm">&copy; 2025 Brainkets. All rights reserved.</span>
        </div>

        {/* Right: Links */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:underline transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
