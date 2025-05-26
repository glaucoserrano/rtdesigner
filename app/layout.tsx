// app/layout.tsx
import "../app/styles/globals.css";
import { Inter } from "next/font/google";
import { Layout } from "./components/layout";

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
        <Layout>
          {children}
        </Layout> 
      </body>
    </html>
  );
}
