import { Progress } from "@/components/atoms/progress";
import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";

const TECHNOLOGIES = [
  {
    name: "HTML",
    progress: 80,
  },
  {
    name: "CSS",
    progress: 75,
  },
  {
    name: "JavaScript",
    progress: 70,
  },
  {
    name: "React",
    progress: 50,
  },
];

export const Technologies = () => {
  return (
    <div className="my-6">
      <TitleTertiary>Tecnologías</TitleTertiary>

      {/* Utilizar el arreglo de TECHNOLOGIES para crear cada item. */}
      {TECHNOLOGIES.map((tech) => (
        <div key={tech.name}>
          <div className="flex justify-between text-gray-500 text-sm mt-4 mb-2">
            <Text text={tech.name} />
            <Text text={`${tech.progress}%`} styles="text-blue-500" />
          </div>
          <Progress value={tech.progress} />
        </div>
      ))}
    </div>
  );
};
