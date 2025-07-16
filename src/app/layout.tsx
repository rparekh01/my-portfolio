import { Header } from "@/components/navigation/Header";
import "./globals.css";
import ProgressBar from "@/components/progressbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <Header />

        {children}
      </body>
    </html>
  );
}
