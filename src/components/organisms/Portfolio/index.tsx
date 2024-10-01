import { PortfolioCard } from "@/components/molecules/PortfolioCard";

const PROJECTS = [
  {
    image: "/assets/portfolio.png",
    title: "Proyecto 1",
    description: "Descripción del proyecto 1.",
  },
  {
    image: "/assets/portfolio.png",
    title: "Proyecto 2",
    description: "Descripción del proyecto 2.",
  },
  {
    image: "/assets/portfolio.png",
    title: "Proyecto 3",
    description: "Descripción del proyecto 3.",
  },
  {
    image: "/assets/portfolio.png",
    title: "Proyecto 4",
    description: "Descripción del proyecto 4.",
  },
  {
    image: "/assets/portfolio.png",
    title: "Proyecto 5",
    description: "Descripción del proyecto 5.",
  },
];

export const Portfolio = () => {
  return (
    <section>
      {/* Utilizar el arreglo de PROJECTS para crear cada card del portfolio. */}
      <div className="flex gap-4 overflow-x-auto">
        {PROJECTS.map((project) => (
          <PortfolioCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};
