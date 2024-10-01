import { ReactNode } from "react";

export const FooterLink = ({
  href,
  children,
  target,
}: {
  href: string;
  children: ReactNode;
  target?: string;
}) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-blue-600 font-semibold"
      target={target}
    >
      {children}
    </a>
  );
};

export const SocialLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-center w-12 h-12 text-2xl text-white rounded-full bg-blue-500 hover:bg-blue-600"
    >
      {children}
    </a>
  );
};
