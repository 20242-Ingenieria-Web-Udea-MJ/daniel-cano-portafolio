import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";

import { FaRegStar } from "react-icons/fa6";

const EXTRA_SKILLS = ["TypeScript", "Tailwind", "Git"];

export const ExtraSkills = () => {
  return (
    <div className="my-6">
      <TitleTertiary>Habilidades Extra</TitleTertiary>

      {/* Utilizar el arreglo de EXTRA_SKILLS para crear cada item. */}
      <div className="flex flex-col gap-1 mt-4">
        {EXTRA_SKILLS.map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <FaRegStar className="text-blue-500" />
            <Text text={skill} styles="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
