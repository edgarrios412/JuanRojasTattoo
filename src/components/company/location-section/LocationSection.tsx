import { HeaderSection } from "@/components";

export const LocationSection = () => {
  return (
    <section className="mx-auto py-16">
      <HeaderSection
        title="Nuestra ubicación"
        subtitle="Visítanos en nuestro estudio, convenientemente ubicado para tu comodidad."
      />
      <div className="flex flex-col lg:flex-row bg-neutral-darkgrey">
        <div className="relative lg:w-1/2 flex flex-col justify-center items-center overflow-x-hidden h-[400px] md:h-96">
          <h3 className="text-3xl text-primary font-bold mb-2">
            Información de contacto
          </h3>
          <span className="text-lg text-neutral-gray font-bold mb-4">
          No esperes más contáctanos
          </span>
          <p>
            <strong>Dirección:</strong> 1039 Grant St SE A10, Atlanta, GA 30315,
            US
          </p>
          <p>
            <strong>Hora de atención:</strong> Monday to Saturday, 12:00 PM - 20:00 PM
          </p>
          <p>
            <strong>Telefono:</strong> +57 314 3670076
          </p>
          {/* <p>
            <strong>Correo:</strong> contact@atlantaink.com
          </p> */}
        </div>
        <iframe
          className="lg:w-1/2 h-64 md:h-96 overflow-hidden rounded-t-3xl lg:rounded-l-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6636.66036172617!2d-74.0046863!3d5.0245323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407172a4dcd811:0xbfc436beeccbe0c9!2sAlma%20negra%20tattoo%20studio!5e0!3m2!1ses!2sco!4v1725552961038!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{
            filter: "invert(1) brightness(1) grayscale(100%)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
