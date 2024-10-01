import { ContactInput, ContactTextarea } from "@/components/atoms/inputs";
import { ContactLabel } from "@/components/atoms/label";

export const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <ContactLabel text="Nombre" />
        <ContactInput type="text" placeholder="Ingresa tu nombre" />
      </div>
      <div className="flex flex-col">
        <ContactLabel text="Correo electrónico" />
        <ContactInput
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div className="flex flex-col">
        <ContactLabel text="Mensaje" />
        <ContactTextarea placeholder="Escribe tu mensaje" />
      </div>
    </div>
  );
};
