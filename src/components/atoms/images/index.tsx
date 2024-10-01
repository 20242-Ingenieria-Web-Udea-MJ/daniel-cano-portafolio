import Image from "next/image";

export const ProfileImage = ({ styles }: { styles?: string }) => {
  return (
    <Image
      src="/assets/profile.png"
      width={500}
      height={500}
      alt="Caricatura de Daniel generada con IA"
      className={styles}
    />
  );
};

export const PortfolioImage = ({
  image,
  styles,
}: {
  image: string;
  styles?: string;
}) => {
  return (
    <Image
      src={image}
      width={500}
      height={300}
      alt="Screenshot del proyecto"
      className={`w-full ${styles}`}
    />
  );
};
