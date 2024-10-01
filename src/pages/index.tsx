import { FooterLink } from "@/components/atoms/links";
import { Overlay } from "@/components/atoms/overlay";
import { TitleSecondary } from "@/components/atoms/titles";

import { Contact } from "@/components/organisms/Contact";
import { Education } from "@/components/organisms/Education";
import { Hero } from "@/components/organisms/Hero";
import { Knowledge } from "@/components/organisms/Knowledge";
import { Portfolio } from "@/components/organisms/Portfolio";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { SocialMedia } from "@/components/organisms/SocialMedia";

import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => {
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  return (
    <div className="grid grid-cols-[25%_1fr_5%] gap-6 h-screen overflow-hidden w-3/4 mx-auto">
      {showContact && <Overlay onCloseContact={handleCloseContact} />}
      {showContact && <Contact onCloseContact={handleCloseContact} />}

      <div className="col-start-1">
        <SkillsSection />
      </div>
      <div className="col-start-2 grid grid-rows-[1fr_auto] h-screen overflow-y-auto overflow-x-auto">
        <main className="h-full w-full">
          <Hero onOpenContact={handleOpenContact} />
          <TitleSecondary>Conocimientos</TitleSecondary>
          <Knowledge />
          <TitleSecondary>Educación</TitleSecondary>
          <Education />
          <TitleSecondary>Portafolio</TitleSecondary>
          <Portfolio />
        </main>
        <footer className="flex gap-2 justify-center mt-4 bg-white p-4">
          Realizado por:
          <FooterLink href="https://github.com/danielcanoh22" target="_blank">
            @danielcanoh22
          </FooterLink>
          🚀
        </footer>
      </div>
      <aside className="col-start-3 bg-white">
        <SocialMedia />
      </aside>
    </div>
  );
}
