"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [querClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={querClient}>
      <ChakraProvider>
        <CacheProvider>{children}</CacheProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Providers;
