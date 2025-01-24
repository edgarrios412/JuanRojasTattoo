import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { mainFont } from "@/config/fonts";
import { getCompany } from "@/lib/api";
import { MenuBar, Footer, DataProvider } from "@/components";

export const metadata: Metadata = {
  title: "Juan Rojas - Tatuador",
  description: "Tatuador Zipaquira",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const company = await getCompany();

  return (
    <html lang="es" className="dark">
      <body className={mainFont.className}>
        <NextUIProvider>
          <DataProvider initialData={null}>
            <MenuBar />
            {children}
            <Footer />
          </DataProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
