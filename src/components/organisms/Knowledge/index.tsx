import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";

import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const KNOWLEDGE = [
  {
    icon: <FaLaptopCode />,
    title: "Desarrollo Web",
    description: "Creación de interfaces de usuario atractivas.",
  },
  {
    icon: <FaGithub />,
    title: "Control de Versiones",
    description: "Manejo de Git y GitHub para la colaboración en proyectos.",
  },
  {
    icon: <MdOutlinePhoneAndroid />,
    title: "Diseño Responsivo",
    description:
      "Desarrollo de aplicaciones web que se adapten a diferentes tamaños de pantalla.",
  },
];

export const Knowledge = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-4">
      {/* Utilizar el arreglo de KNOWLEDGE para crear cada card de conocimiento. */}
      {KNOWLEDGE.map((item) => (
        <KnowledgeCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          key={item.title}
        />
      ))}
    </section>
  );
};
