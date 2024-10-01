export const ContactInput = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none py-1 px-2 rounded-md border border-blue-500"
    />
  );
};

export const ContactTextarea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="py-1 px-2 outline-none resize-none rounded-md h-20 border border-blue-500"
    ></textarea>
  );
};
