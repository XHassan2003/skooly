import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderWrapper from "@/components/layout/header-wrapper";
import Footer from "@/components/layout/footer";
import QueryProvider from "@/components/providers/query-provider";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Skooly",
  description: "Skooly is a AI learning platform to connect with other learners in the community and share your learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <QueryProvider>
          <HeaderWrapper />
          {children}
          <Footer />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
