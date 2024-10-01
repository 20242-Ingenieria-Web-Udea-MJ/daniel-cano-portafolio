import { Text } from "@/components/atoms/text";

const PERSONAL_INFO = [
  {
    name: "Edad:",
    value: "23",
  },
  {
    name: "Ciudad:",
    value: "Medellín",
  },
  {
    name: "Estado:",
    value: "Disponible",
  },
];

export const PersonalInformation = () => {
  return (
    <div className="flex flex-col gap-2 my-6">
      {/* Utilizar el arreglo de PERSONAL_INFO para crear cada item. */}
      {PERSONAL_INFO.map((info) => (
        <div key={info.value} className="flex justify-between">
          <Text text={info.name} />
          <Text
            text={info.value}
            styles={info.value === "Disponible" ? "text-green-600" : ""}
          />
        </div>
      ))}
    </div>
  );
};
