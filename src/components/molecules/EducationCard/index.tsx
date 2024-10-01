import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";

export const EducationCard = () => {
  return (
    <article className="grid grid-cols-2 bg-white p-6">
      <div>
        <TitleTertiary>Universidad de Antioquia</TitleTertiary>
        <div className="flex items-center gap-4 mt-6">
          <Text text="Estudiante" />
          <small className="bg-blue-500 text-white px-4 rounded-sm">
            2019 - 2025
          </small>
        </div>
      </div>
      <div>
        <TitleTertiary>Ingeniería de Sistemas</TitleTertiary>
        <Text
          text="El programa académico prepara a los estudiantes en diferentes áreas, tales como Desarrollo de Software, Blockchain, Inteligencia Artificial, etc."
          styles="text-gray-500 mt-4"
        />
      </div>
    </article>
  );
};
