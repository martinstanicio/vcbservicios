import {
  type Icon,
  IconBolt,
  IconBrush,
  IconTrees,
  IconTruckDelivery,
} from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
import espaciosVerdesImage from "@/assets/espacios-verdes.jpg";
import logisticaImage from "@/assets/logistica.jpg";
import mantenimientoElectricoImage from "@/assets/mantenimiento-electrico.jpg";
import pinturaProfesionalImage from "@/assets/pintura-profesional.jpg";

export type Service = {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  icon: Icon;
  image: StaticImageData;
};

export const services: Service[] = [
  {
    id: "mantenimiento-electrico",
    name: "Mantenimiento Eléctrico",
    description:
      "Personal capacitado para ejecutar trabajos de montaje, mantenimiento preventivo y correctivo en sistemas eléctricos industriales, comerciales y del hogar.",
    bullets: [
      "Montaje de tableros eléctricos",
      "Canalizaciones y bandejas portacables",
      "Cableado de potencia y control",
      "Diagnóstico de fallas",
      "Iluminación industrial y de emergencia",
      "Adecuación a normas de seguridad",
    ],
    icon: IconBolt,
    image: mantenimientoElectricoImage,
  },
  {
    id: "espacios-verdes",
    name: "Espacios Verdes",
    description:
      "Soluciones integrales en mantenimiento de áreas verdes para industrias, empresas, barrios privados y consorcios, garantizando orden, seguridad y una imagen impecable.",
    bullets: [
      "Poda y desmalezamiento programado",
      "Conservación estética y funcional",
      "Mantenimiento correctivo de exteriores",
      "Tratamiento eficiente bajo normas de cuidado ambiental",
    ],
    icon: IconTrees,
    image: espaciosVerdesImage,
  },
  {
    id: "logistica",
    name: "Logística",
    description:
      "Servicio enfocado en la eficiencia, la organización y el crecimiento operativo. Metodología de mejora continua para brindar soluciones ágiles a cada necesidad corporativa.",
    bullets: [
      "Distribución eficiente",
      "Movimiento de carga seguro",
      "Organización de stock/operaciones",
      "Optimización de tiempos de entrega",
      "Soluciones logísticas personalizadas",
    ],
    icon: IconTruckDelivery,
    image: logisticaImage,
  },
  {
    id: "pintura-profesional",
    name: "Pintura Profesional",
    description:
      "Renovación y protección visual para interiores y exteriores. Enfoque absoluto en la calidad de los acabados, cumplimiento estricto de plazos y excelencia estética.",
    bullets: [
      "Pintura industrial y comercial",
      "Revestimientos protectores",
      "Acabados de alta calidad",
      "Preparación técnica de superficies",
      "Cumplimiento estricto de cronogramas",
    ],
    icon: IconBrush,
    image: pinturaProfesionalImage,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
