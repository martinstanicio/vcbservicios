import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Brand({ className, ...props }: Props) {
  return (
    <Link
      className={cn(
        "flex w-auto items-center gap-4 rounded-l-full bg-linear-to-r from-primary via-primary to-transparent text-primary-foreground",
        className,
      )}
      href="/"
      {...props}
    >
      <Image alt="" className="size-16" sizes="auto" src={logo} />
      <p className="font-bold leading-[1.125]">
        VCB <br />
        Servicios <br />
        Generales <br />
      </p>
    </Link>
  );
}
