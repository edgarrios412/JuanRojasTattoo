"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export const PromotionSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/bookings?firstTime=true`);
  };

  return (
    <section
      className="relative h-96 md:h-72 flex justify-center items-center bg-cover bg-no-repeat md:bg-fixed px-4 md:px-0"
      style={{ backgroundImage: `url("/images/promotion-image.webp")` }}
    >
      <header className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Obtén <span className="text-primary font-black">15%</span> de descuento en tu primer tatuaje
        </h2>
        <p>
        Reserva tu cita y aprovecha esta oferta especial para nuevos
        clientela. Es el momento perfecto para comenzar tu próximo tatuaje.
        </p>
        <a href="https://api.whatsapp.com/send?phone=573143670076&text=Hola!%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank">
        <Button
          onClick={handleButtonClick}
          color="primary"
          className="text-neutral-light font-medium"
        >
          Agendar cita
        </Button>
        </a>
      </header>
    </section>
  );
};
