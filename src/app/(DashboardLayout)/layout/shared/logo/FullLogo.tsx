"use client";

import Image from "next/image";

const FullLogo = () => {
  return (
    <>
      {/* Dark Logo */}
      <Image
        src="/tailwindadmin-nextjs/images/logos/dark-logo.svg"
        alt="logo"
        width={204}
        height={36}
        className="block dark:hidden rtl:scale-x-[-1]"
      />
      {/* Light Logo */}
      <Image
        src="/tailwindadmin-nextjs/images/logos/light-logo.svg"
        alt="logo"
        width={204}
        height={36}
        className="hidden dark:block rtl:scale-x-[-1]"
      />
    </>
  );
};

export default FullLogo;
