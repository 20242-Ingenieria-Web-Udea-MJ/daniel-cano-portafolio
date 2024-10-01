import { ProfileImage } from "@/components/atoms/images";
import { HeroContent } from "@/components/molecules/HeroContent";

export const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="flex items-center gap-6 bg-white px-10 overflow-hidden">
      <HeroContent onOpenContact={onOpenContact} />
      <ProfileImage styles="w-1/2 drop-shadow-md pt-6" />
    </section>
  );
};
