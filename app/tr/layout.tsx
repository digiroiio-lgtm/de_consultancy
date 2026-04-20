import type { Metadata } from "next";
import { company } from "../lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Advisera Global | Yönetim ve İhracat Danışmanlığı",
    template: "%s | Advisera Global",
  },
  description:
    "Üreticiler için kurumsal yönetim danışmanlığı ve ihracat danışmanlığı. Karlılığı artırın, ihracat sistemleri kurun ve küresel büyümeyi hızlandırın.",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
