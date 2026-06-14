import type { Metadata } from "next";

export const siteName = "VCB Servicios Generales";
export const title =
  "Soluciones para hogares, comercios e industrias. Servicio eficiente, confiable y profesional.";
export const description = "...";
export const keywords = [siteName];
export const url = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  : undefined;

export const metadata: Metadata = {
  metadataBase: url,
  title: `${siteName} | ${title}`,
  description,
  generator: "Next.js",
  keywords,
  creator: "Martín Stanicio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteName} | ${title}`,
    description,
    siteName,
    locale: "es_AR",
    url: "/",
  },
};
