import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/ModeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Tech Grind",
  description: "Welcome to Tech Grind",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
