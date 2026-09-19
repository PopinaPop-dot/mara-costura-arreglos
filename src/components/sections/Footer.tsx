import { MapPin } from "lucide-react";
import { ADDRESS, WA_MESSAGES, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-10 sm:pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg font-semibold text-foreground">Mara</p>
        <p className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-accent" />
          Arreglos de Costura · {ADDRESS}
        </p>
        <p>Dale una segunda oportunidad a tus prendas favoritas.</p>
        <a
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-whatsapp underline underline-offset-4 hover:brightness-110"
        >
          Escribinos por WhatsApp
        </a>
        <p className="mt-4 text-xs text-muted-foreground/70">
          Sitio creado por{" "}
          <a
            href="https://wa.me/5493755345562?text=Hola%2C%20vi%20la%20web%20de%20Mara%20y%20quisiera%20consultar%20por%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Felker Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
