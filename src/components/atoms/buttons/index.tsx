import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-max"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const PortfolioButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="text-blue-500 hover:text-blue-600 font-semibold w-max">
      {children}
    </button>
  );
};

export const CloseFormButton = ({
  onCloseContact,
}: {
  onCloseContact: () => void;
}) => {
  return (
    <button
      className="text-2xl w-max p-1 text-blue-500 hover:text-blue-600 absolute top-2 right-2"
      onClick={onCloseContact}
    >
      <IoMdClose />
    </button>
  );
};
