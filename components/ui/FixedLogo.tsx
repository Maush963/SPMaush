import React from "react";
import Link from "next/link";

const FixedLogo = () => {
  return (
    <div className="fixed top-5 left-5 z-50">
      <Link href="/">
        <div className="w-10 h-10 md:w-12 md:h-12 relative cursor-pointer opacity-25">
          <img src="/s.png" alt="Logo" />
        </div>
      </Link>
    </div>
  );
};

export default FixedLogo;
