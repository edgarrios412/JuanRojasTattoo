"use client";

import { useCompanyStore } from "@/store";
import { HR } from "@/components";

export const Footer = () => {
  const { companyData } = useCompanyStore();

  return (
    <footer className="mt-auto bg-neutral-darkgrey">
      <div className="max-w-screen-xl mx-auto text-center py-8 space-y-4 px-4 xl:px-0">
        <div className="text-sm text-neutral-gray max-w-screen-md mx-auto">
          <p>
            Todos los derechos reservados por Juan Rojas
          </p>
        </div>
        <HR />
        <div className="text-sm text-neutral-gray">
          <p>
            &copy; {new Date().getFullYear()} {companyData?.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
