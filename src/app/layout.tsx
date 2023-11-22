import DashboardLayout from "@/components/dashboard-layout";
import { Stack, Text } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delman Hiring Test",
  description: "Delman Hiring Test for Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Stack
            padding={2}
            borderBottom="1px"
            borderColor="gray.300"
            pos="relative"
            position="static"
          >
            <Text fontSize="large" fontWeight="600">
              delman.io
            </Text>
          </Stack>
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
