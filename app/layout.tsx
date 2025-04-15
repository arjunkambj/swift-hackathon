import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboard/AppSidebar";
import { FC, ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caffeinator - Create & airdrop compressed Tokens",
  description: "Create & airdrop compressed Tokens on Solana",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} overflow-x-hidden antialiased`}>
        <SidebarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-row h-full w-screen">
              <AppSidebar />
              <div className="w-full min-h-screen">{children}</div>
            </div>
            <Toaster />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
