import { Button, CloseFormButton } from "@/components/atoms/buttons";
import { ContactForm } from "@/components/molecules/ContactForm";

export const Contact = ({ onCloseContact }: { onCloseContact: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 py-8 rounded-md w-96 z-20"
      onSubmit={handleSubmit}
    >
      <CloseFormButton onCloseContact={onCloseContact} />
      <ContactForm />
      <Button>Enviar</Button>
    </form>
  );
};
