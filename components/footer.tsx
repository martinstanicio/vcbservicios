import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  email,
  formattedPhone,
  phone,
  simplerFormattedPhone,
} from "@/app/contact";
import { siteName, title } from "@/app/metadata";
import { services } from "@/app/services";
import { cn } from "@/lib/utils";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { Brand } from "./brand";

type Props = React.ComponentProps<"footer">;

export function Footer({ className, ...props }: Props) {
  return (
    <footer
      className={cn(
        "border-border border-t bg-secondary text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <div className="container py-12 xl:max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Brand className="mx-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {title}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <nav className="flex flex-col space-y-2">
              {services.map((service) => (
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-primary"
                  href={`/servicios/${service.id}`}
                  key={service.id}
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Enlaces
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/"
              >
                Inicio
              </Link>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/#sobre-nosotros"
              >
                Sobre Nosotros
              </Link>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/#servicios"
              >
                Servicios
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <div className="space-y-3">
              <Link
                className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
                href={getWhatsAppURL(
                  phone,
                  "Hola VCB, me interesa conocer más sobre sus servicios...",
                ).toString()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconBrandWhatsapp className="size-4" />
                {formattedPhone}
              </Link>
              <Link
                className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
                href={`tel:${phone}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconPhone className="size-4" />
                {simplerFormattedPhone}
              </Link>
              {/* <Link
                className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
                href={`mailto:${email}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconMail className="size-4" />
                {email}
              </Link> */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <IconMapPin className="size-4" />
                Zárate, Buenos Aires
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-border border-t pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}
