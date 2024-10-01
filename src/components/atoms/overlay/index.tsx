export const Overlay = ({ onCloseContact }: { onCloseContact: () => void }) => {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-black/40 z-10"
      onClick={onCloseContact}
    ></div>
  );
};
