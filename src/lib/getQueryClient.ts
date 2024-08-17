import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";
import { queryClientOptions } from "./queryClientOptions";

const getQueryClient = cache(() => new QueryClient(queryClientOptions));
export default getQueryClient;
