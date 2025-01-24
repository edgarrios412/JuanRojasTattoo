"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

export const FinalCTASection = () => {
  const [firstName, setFirstName] = useState("");
  const router = useRouter();

  // TODO: Add types
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/bookings?firstName=${firstName}`);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            ¡Qué esperas, agenda ahora!
          </h2>
        </header>
        <form
          className="max-w-screen-sm mx-auto flex flex-col space-y-4 px-4 xl:px-0"
          onSubmit={handleSubmit}
        >
          {/* <Input
            type="text"
            size="lg"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /> */}
          <a href="https://api.whatsapp.com/send?phone=573143670076&text=Hola!%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank">
          <Button
            type="submit"
            className="bg-neutral-dark w-full text-neutral-light font-medium rounded-xl"
          >
            Agendar cita
          </Button>
          </a>
        </form>
      </div>
    </section>
  );
};
