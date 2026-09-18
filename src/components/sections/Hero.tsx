import { Camera, Heart, Scissors, Sparkles } from "lucide-react";
import { IMAGES, WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 px-4 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            Arreglos de Costura · Oberá, Misiones
          </p>

          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Dale una segunda oportunidad a tus prendas favoritas.
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Cierres, dobladillos, ajustes, parches y arreglos textiles con
            atención personalizada y años de experiencia.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">Arreglos y ajustes</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">Trabajo artesanal</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">Atención cercana</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(WA_MESSAGES.costura)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-whatsapp px-7 text-base font-semibold text-whatsapp-foreground shadow-warm-lg transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Consultar por WhatsApp
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="h-4 w-4 shrink-0 text-accent" />
            ¿No sabés si tiene arreglo? Mandanos una foto y te orientamos.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm-lg">
            <img
              src={IMAGES.hero}
              alt="Manos trabajando en una máquina de coser"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-card/95 px-4 py-3 text-sm shadow-warm backdrop-blur-sm">
            <span className="font-display text-base font-semibold text-primary">
              Pequeños arreglos, grandes historias.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
