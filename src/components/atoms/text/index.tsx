export const Text = ({ text, styles }: { text: string; styles?: string }) => {
  return <p className={`${styles}`}>{text}</p>;
};
