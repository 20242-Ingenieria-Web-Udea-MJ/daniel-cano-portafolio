import { ProfileImage } from "@/components/atoms/images";
import { Text } from "@/components/atoms/text";

export const ProfileInformation = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden shadow-lg shadow-blue-400/30">
        <ProfileImage />
      </div>
      <div className="my-6 text-center">
        <Text text="Daniel Cano" styles="font-semibold text-lg" />
        <Text text="Ingeniero de Sistemas" styles="text-gray-500 text-sm" />
      </div>
    </div>
  );
};
