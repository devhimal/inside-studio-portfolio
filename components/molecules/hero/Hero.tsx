"use client";

import React, { useRef } from "react";

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <section className="py-16 px-4">
      <h2
        ref={headingRef}
        className="text-sectionHeading mb-4 w-[905px] lg:w-[70%] font-heading leading-tight"
      >
        Inside is an impact-driven design & technology studio born in Nepal,
        creating globally.
      </h2>
    </section>
  );
};

export default Hero;
