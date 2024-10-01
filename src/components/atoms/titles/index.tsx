import React, { ReactNode } from "react";

export const TitleMain = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};

export const TitleSecondary = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold text-center my-10 text-gray-600">
      {children}
    </h2>
  );
};

export const TitleTertiary = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};
