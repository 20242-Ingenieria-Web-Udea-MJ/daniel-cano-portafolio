import { Division } from "@/components/atoms/division";
import { ExtraSkills } from "@/components/molecules/ExtraSkills";
import { Languages } from "@/components/molecules/Languages";
import { PersonalInformation } from "@/components/molecules/PersonalInformation";
import { ProfileInformation } from "@/components/molecules/ProfileInformation";
import { Technologies } from "@/components/molecules/Technologies";

export const SkillsSection = () => {
  return (
    <div className="p-10 bg-white h-screen overflow-y-auto">
      <ProfileInformation />
      <Division />
      <PersonalInformation />
      <Division />
      <Languages />
      <Division />
      <Technologies />
      <Division />
      <ExtraSkills />
    </div>
  );
};
