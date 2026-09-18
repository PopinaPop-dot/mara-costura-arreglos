// Datos centrales del emprendimiento de Mara.
// Acá se cambian número, mensajes, servicios, imágenes y dirección.

export const WHATSAPP_NUMBER = "5493755543956";

/** Genera un enlace de WhatsApp con mensaje precargado. */
export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  general:
    "Hola Mara, vi tu página y quería consultarte por un arreglo de costura. Te envío una foto.",
  costura:
    "Hola Mara, vi tu página y quería consultarte por un arreglo de costura. Te envío una foto.",
};

export const ADDRESS = "San Luis 964, Oberá, Misiones";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=San%20Luis%20964%2C%20Ober%C3%A1%2C%20Misiones%2C%20Argentina&t=m&z=16&output=embed&iwloc=near";

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=San+Luis+964,+Ober%C3%A1,+Misiones,+Argentina";

export const COSTURA_SERVICES = [
  "Cambio de cierres",
  "Dobladillos de pantalones",
  "Achicar prendas",
  "Agrandar prendas (cuando el diseño lo permite)",
  "Parches",
  "Reparaciones generales",
  "Ajustes de ropa",
  "Dobladillos de manteles",
  "Ajustes de cortinas",
  "Arreglos de sábanas",
  "Otros arreglos textiles",
];

// Fotografías provisionales (stock). Reemplazar por fotos reales acá mismo.
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const IMAGES = {
  hero: u("photo-1641320197434-6ae0ca235048"),
  costura: u("photo-1626274890657-e28d5b65b04b"),
  confianza: u("photo-1641320197434-6ae0ca235048"),
};
