import {
  IconArrowDown,
  IconBrandWhatsappFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { phone } from "@/app/contact";
import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="dark relative flex min-h-[90vh] items-center justify-center bg-background">
      <Image
        alt=""
        className="object-cover object-center"
        fill
        priority
        src={heroImage}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="container relative py-24 text-center lg:py-40">
        <Badge
          className="mb-10 bg-foreground/10 backdrop-blur-sm"
          variant="outline"
        >
          <IconMapPinFilled className="mr-1" />
          Zárate, Buenos Aires
        </Badge>

        <h1 className="text-balance font-bold text-5xl text-foreground tracking-tight sm:text-6xl lg:text-7xl">
          VCB Servicios Generales
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground text-xl leading-relaxed sm:text-2xl">
          Soluciones para hogares, comercios e industrias. Servicio eficiente,
          confiable y profesional.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="min-w-55" size="lg">
            <Link
              href={getWhatsAppURL(
                phone,
                "Hola VCB, me interesa conocer más sobre sus servicios",
              ).toString()}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandWhatsappFilled />
              Contactar por WhatsApp
            </Link>
          </Button>
          <Button asChild className="min-w-55" size="lg" variant="outline">
            <Link href="#servicios">
              <IconArrowDown />
              Ver Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
