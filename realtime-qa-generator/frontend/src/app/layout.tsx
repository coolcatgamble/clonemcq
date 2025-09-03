import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Container } from "@/components/ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Qwiz Master (MVP)",
  description: "Live lecture quiz MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900`}>
        <header className="border-b bg-white/70 backdrop-blur">
          <Container>
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="font-semibold">
                Classroom MCQ
              </Link>
              <nav className="flex gap-4 text-sm">
                <Link className="text-gray-600 hover:text-gray-900" href="/lecturer">
                  Lecturer
                </Link>
                <Link className="text-gray-600 hover:text-gray-900" href="/student">
                  Student
                </Link>
              </nav>
            </div>
          </Container>
        </header>

        <main className="py-8">
          <Container>{children}</Container>
        </main>

        <footer className="border-t bg-white/70 py-6 text-xs text-gray-500 backdrop-blur">
          <Container>MVP demo — no backend wired yet</Container>
        </footer>
      </body>
    </html>
  );
}
