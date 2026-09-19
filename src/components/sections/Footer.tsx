export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-10 sm:pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <p className="max-w-2xl text-sm sm:text-base">
          Tu negocio ya existe. Hagamos que también exista online, reciba más consultas y venda más.
        </p>
        <a
          href="https://wa.me/5493755345562?text=Hola%2C%20vi%20la%20web%20de%20Mara%20y%20quisiera%20consultar%20por%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 font-medium underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Felker Studio
        </a>
      </div>
    </footer>
  );
}
