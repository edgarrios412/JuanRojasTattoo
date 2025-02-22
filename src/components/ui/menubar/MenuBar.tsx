"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Bird } from "lucide-react";
import {
  COMPANY_NAME,
  MENU_ITEMS,
  NAV_ITEMS,
  NAV_CTA,
} from "@/config/constants";
import { Instagram, YouTube, Twitch, Facebook } from "@/components";
import { useCompanyStore } from "@/store";

export const MenuBar = () => {
  const { companyData } = useCompanyStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const shouldBlur = isScrolled || isMenuOpen;
  const isHomePage = pathname === "/";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBordered={isHomePage ? shouldBlur : true}
      isBlurred={shouldBlur}
      // position="static"
      className={`fixed z-50 transition-colors duration-300 ${shouldBlur ? "" : "bg-transparent blur-0"}`}
    >
      <NavbarContent>
        <Link color="foreground" href="/">
          <NavbarBrand>
            <Bird />
            <span className="font-bold ml-2">{COMPANY_NAME.toUpperCase()}</span>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.id}>
              <Link
                href={item.href}
                className={
                  isActive ? "font-bold text-primary" : "hover:font-bold"
                }
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            href={"https://www.facebook.com/lykahios/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <a
            href={companyData?.twitch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch />
          </a>
        </NavbarItem> */}
        <NavbarItem className="hidden lg:flex">
          <a
            href={"https://www.instagram.com/lykahios"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href={NAV_CTA.href}
            color="primary"
            className="text-neutral-light font-medium"
          >
            {NAV_CTA.label}
          </Button>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className={`${shouldBlur ? "" : "bg-transparent blur-0"}`}>
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarMenuItem key={item.id}>
              <Link
                href={item.href}
                onClick={handleMenuClose}
                className={
                  isActive ? "font-bold text-primary" : "hover:font-bold"
                }
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};
