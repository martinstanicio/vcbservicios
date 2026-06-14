import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

export { metadata } from "@/app/metadata";

const fontSerif = Roboto_Slab({ subsets: ["latin"], variable: "--font-serif" });

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html
      className={cn("antialiased", fontSerif.variable)}
      lang="es"
      suppressHydrationWarning
    >
      <body className="bg-background font-serif text-foreground">
        {children}
        <Footer />
      </body>
    </html>
  );
}
