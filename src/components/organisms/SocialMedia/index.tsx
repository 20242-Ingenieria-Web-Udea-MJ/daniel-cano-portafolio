import { SocialLink } from "@/components/atoms/links";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4 items-center pt-6">
      <SocialLink href="https://www.linkedin.com/in/daniel-cano-hernandez-baaa43318/">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://github.com/danielcanoh22">
        <FaGithub />
      </SocialLink>
    </div>
  );
};
