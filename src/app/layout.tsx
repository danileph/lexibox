import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { BaseLayout } from "@/widgets/layouts";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Lexibox",
  description: "Service for learning languages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
