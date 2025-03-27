import React from "react";

const CTABanner: React.FC = () => {
  return (
    <div className="bg-[#EDE9DF] flex items-center justify-center p-6 w-full text-center">
      <p className="text-black text-lg font-semibold mr-4">
        Ready to build a healthier, stronger, and more connected team?
      </p>
      <button className="bg-black text-white font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all">
        Book a Trial
      </button>
    </div>
  );
};

export default CTABanner;
