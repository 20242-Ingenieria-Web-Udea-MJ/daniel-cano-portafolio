import { PortfolioButton } from "@/components/atoms/buttons";
import { PortfolioImage } from "@/components/atoms/images";

import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";

export const PortfolioCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col bg-white pt-8 pb-6 hover:border-2 hover:border-blue-600 cursor-pointer flex-shrink-0 basis-72">
      <div className="w-full">
        <PortfolioImage image={image} styles="shadow-md" />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <TitleTertiary>{title}</TitleTertiary>
        <Text text={description} styles="text-gray-500" />
        <PortfolioButton>
          Ver Más <span className="text-sm">&#10095;</span>
        </PortfolioButton>
      </div>
    </article>
  );
};
