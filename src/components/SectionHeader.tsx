
import React from "react";

const SectionHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={
      "text-lg md:text-xl font-semibold tracking-wide text-accentpurple uppercase mb-2 mt-8 " +
      className
    }
  >
    {children}
  </h2>
);

export default SectionHeader;
