import { IconEye, IconHeart, IconTarget } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const values = [
  "Responsabilidad",
  "Compromiso",
  "Honestidad",
  "Puntualidad",
  "Trabajo en equipo",
  "Mejora continua",
];

export function About() {
  return (
    <section className="py-20" id="sobre-nosotros">
      <div className="container sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="text-center">
          <h2 className="font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
            Sobre Nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Conocé nuestra misión, visión y los valores que nos definen
          </p>
        </div>

        <div className="space-y-8">
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="group border border-transparent text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="gap-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconTarget className="size-8" />
                </div>
                <CardTitle className="text-xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-base text-muted-foreground leading-relaxed">
                  Brindar soluciones prácticas y confiables en servicios
                  generales, garantizando calidad, rapidez y cumplimiento.
                  Sostener su inversión para que lo que hoy le quita el sueño
                  sea solo una anécdota.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-transparent text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="gap-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconEye className="size-8" />
                </div>
                <CardTitle className="text-xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-base text-muted-foreground leading-relaxed">
                  Ser una empresa líder y reconocida en la zona por su
                  profesionalismo, confianza y excelencia operativa. Construir
                  relaciones duraderas basadas en resultados tangibles.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="group border border-transparent text-center transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader className="gap-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <IconHeart className="size-8" />
              </div>
              <CardTitle className="text-xl">Valores</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-wrap justify-center gap-3">
              {values.map((value) => (
                <Badge key={value} variant="secondary">
                  {value}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
