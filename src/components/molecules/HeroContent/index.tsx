import { Button } from "@/components/atoms/buttons";
import { Text } from "@/components/atoms/text";
import { TitleMain } from "@/components/atoms/titles";

export const HeroContent = ({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <TitleMain>
        Soy Daniel, <br /> Desarrollador{" "}
        <span className="text-blue-500">Front-End</span>
      </TitleMain>
      <Text
        text="Soy estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, con una gran pasión por el desarrollo de aplicaciones web y el software en general."
        styles="text-gray-500"
      />
      <Button onClick={onOpenContact}>Contáctame</Button>
    </div>
  );
};
