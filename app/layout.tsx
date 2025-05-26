// app/layout.tsx
import "../app/styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RT Designer de Unhas",
  description: "Especialista em unhas de gel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-pink-100 min-h-screen`}>
        <div className={`relative 
        flex 
        flex-col
        ${inter.className}
        min-h-screen
        `}>
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
