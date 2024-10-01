import { Text } from "@/components/atoms/text";
import { TitleTertiary } from "@/components/atoms/titles";
import { ReactNode } from "react";

export const KnowledgeCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col items-center gap-4 bg-white p-6">
      <div className="text-6xl text-blue-500">{icon}</div>
      <TitleTertiary>{title}</TitleTertiary>
      <Text text={description} styles="text-gray-500 text-sm text-center" />
    </article>
  );
};
