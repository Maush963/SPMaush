import React from "react";
import Link from "next/link";

const FixedLogo = () => {
  return (
    <div className="fixed top-5 left-5 z-50 hidden sm:block">
      <Link href="/">
        <div className="w-10 h-10 md:w-12 md:h-12 relative cursor-pointer opacity-25 hover:opacity-50 transition-opacity duration-300">
          <img
            src="/favicon-32x32.png"
            alt="Sorelli Agency Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default FixedLogo;
