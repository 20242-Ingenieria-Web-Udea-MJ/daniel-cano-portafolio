import { Progress } from "@/components/atoms/progress";
import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";

export const Languages = () => {
  return (
    <div className="my-6">
      <TitleTertiary>Idiomas</TitleTertiary>
      <div className="flex justify-between text-gray-500 text-sm mt-4 mb-2">
        <Text text="Español" />
        <Text text="Nativo" styles="text-blue-500" />
      </div>
      <Progress value={100} />
    </div>
  );
};
