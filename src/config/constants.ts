export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}

export const COMPANY_NAME = "Juan Rojas";

export const COMPANY_DESCRIPTION = `
Confía en nuestros expertos para tu próximo tatuaje. Con años de experiencia y pasión por los detalles, estamos aquí para hacer realidad su visión con precisión y profesionalismo. Experimente la diferencia del arte bien elaborado.
`;

export const DEFAULT_IMAGE = "/images/no-image.webp";

export const NAV_CTA = { label: "Agendar cita", href: "https://api.whatsapp.com/send?phone=573143670076&text=Hola!%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" };

export const SORT_CHOICES = [
  { key: "latest", label: "Latest Products" },
  { key: "oldest", label: "Oldest Products" },
  { key: "lowest_price", label: "Lowest Price" },
  { key: "highest_price", label: "Highest Price" },
];

export const PLACEMENT_CHOICES = [
  { key: "arm", label: "Arm" },
  { key: "leg", label: "Leg" },
  { key: "back", label: "Back" },
  { key: "chest", label: "Chest" },
  { key: "abdomen", label: "Abdomen" },
  { key: "side", label: "Side" },
  { key: "foot", label: "Foot" },
  { key: "hand", label: "Hand" },
  { key: "neck", label: "Neck" },
  { key: "other", label: "Other" },
];

export const NAV_ITEMS = [
  { id: 1, href: "/artists", label: "Artistas" },
  { id: 2, href: "/prices", label: "Precios" },
  { id: 3, href: "/products", label: "Productos" },
  // { id: 4, href: "/applicants/apply", label: "Applicants" },
];

export const MENU_ITEMS = [
  { id: 1, href: "/artists", label: "Artistas" },
  { id: 2, href: "/prices", label: "Precios" },
  { id: 3, href: "/products", label: "Productos" },
  // { id: 4, href: "/applicants/apply", label: "Applicants" },
  { id: 4, href: "https://api.whatsapp.com/send?phone=573143670076&text=Hola!%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita", label: "Agendar cita" },
];

export const SCHEDULE_LIST = [
  {
    id: 1,
    day: "Monday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 2,
    day: "Tuesday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 3,
    day: "Wednesday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 4,
    day: "Thursday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 5,
    day: "Friday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 6,
    day: "Saturday",
    schedule: "10:00 AM to 10:30 PM",
  },
  {
    id: 7,
    day: "Sunday",
    schedule: "Closed",
  },
];
