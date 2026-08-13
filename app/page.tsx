import { CinematicHero } from 'components/tecito/cinematic-hero';

export const metadata = {
  title: 'Tecito de La Verdad',
  description:
    'Una pausa, una taza y una verdad. Tecito de La Verdad, desde la Ciudad de México.'
};

const collections = [
  {
    name: 'Amor',
    line: 'Lo que nace de ti también merece ternura.',
    accent: 'bg-[#6f2f32]'
  },
  {
    name: 'Paz',
    line: 'Hay fuerza en volver a lo esencial.',
    accent: 'bg-[#7b8067]'
  },
  {
    name: 'Gratitud',
    line: 'Lo cotidiano también puede ser sagrado.',
    accent: 'bg-[#a5783d]'
  },
  {
    name: 'Verdad',
    line: 'Lo que sabes de ti no necesita permiso.',
    accent: 'bg-[var(--tecito-obsidiana)]'
  }
];

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <section
        id="ritual"
        className="bg-[var(--tecito-cantera)] px-5 py-24 text-[var(--tecito-obsidiana)] sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--tecito-barro)]">
              El ritual
            </p>
            <h2 className="tecito-display mt-5 max-w-xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Cada taza contiene una verdad.
            </h2>
          </div>
          <div className="flex max-w-2xl flex-col justify-end lg:pb-2">
            <p className="text-lg leading-8 text-[var(--tecito-obsidiana)]/76 sm:text-xl sm:leading-9">
              El té crea la pausa. La frase crea el recuerdo. Un pequeño momento para detener el ruido y volver a ti.
            </p>
            <div className="mt-10 border-y border-[var(--tecito-obsidiana)]/15 py-7">
              <p className="tecito-display text-2xl italic sm:text-3xl">
                “Tu paz también es una forma de poder.”
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--tecito-barro)]">
                La Verdad de Hoy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="colecciones"
        className="bg-[var(--tecito-obsidiana)] px-5 py-24 text-[var(--tecito-cantera)] sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                Cuatro estados. Cuatro formas de volver a ti.
              </p>
              <h2 className="tecito-display mt-4 text-4xl sm:text-5xl lg:text-6xl">Las colecciones</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">
              Amor, Paz, Gratitud y Verdad. El té llega después. Primero construimos el ritual y la historia.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <article
                key={collection.name}
                className={`${collection.accent} group flex min-h-[26rem] flex-col justify-between p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                  Colección
                </span>
                <div>
                  <h3 className="tecito-display text-4xl sm:text-5xl">{collection.name}</h3>
                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/72">{collection.line}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="hoteles"
        className="bg-[#d8c8b5] px-5 py-24 text-[var(--tecito-obsidiana)] sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:gap-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--tecito-barro)]">
            Hoteles · Hospitalidad · Regalos
          </p>
          <div>
            <h2 className="tecito-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Un detalle pequeño puede cambiar cómo se recuerda una estancia.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--tecito-obsidiana)]/70">
              Estamos desarrollando experiencias de bienvenida para hoteles boutique, spas y espacios de hospitalidad en México.
            </p>
            <a
              href="mailto:hola@tecitodelaverdad.com?subject=Hoteles%20%E2%80%94%20Tecito%20de%20La%20Verdad"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--tecito-obsidiana)] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tecito-cantera)]"
            >
              Hablemos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
