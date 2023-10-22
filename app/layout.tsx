"use client";
import { NextAuthProvider } from "@/Providers/NextAuthProvider";
import "./globals.css";
import { Sora } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Providers } from "./providers/providers";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={sora.className}>
        <NextAuthProvider>
          <QueryClientProvider client={queryClient}>
            <Providers>
              <main className="flex">
                {pathname === "/login" || pathname === "/signup" ? (
                  ""
                ) : (
                  <div>
                    <Sidebar />
                  </div>
                )}

                <div className="flex-grow mt-20 lg:mt-0">{children}</div>
                <Toaster position="top-center" />
              </main>
            </Providers>
          </QueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
