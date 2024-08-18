"use client";

import { queryClientOptions } from "@/lib/queryClientOptions";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient(queryClientOptions);

const Providers = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
