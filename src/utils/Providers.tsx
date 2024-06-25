"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ApolloProviderWrapper = dynamic(
    () => import("@apollo/client").then((mod) => mod.ApolloProvider),
    { ssr: false },
);

import createApolloClient from "./ApolloProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [client] = useState(createApolloClient);

    return (
        <ApolloProviderWrapper client={client}>
            {children}
        </ApolloProviderWrapper>
    );
};

export default Providers;
