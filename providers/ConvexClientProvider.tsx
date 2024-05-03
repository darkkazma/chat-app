"use client";


import {ConvexReactClient, ConvexProvider, Authenticated, AuthLoading} from 'convex/react';
import React, {ReactNode} from 'react'
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ClerkProvider, useAuth} from "@clerk/nextjs";
import LoadingLogo from "@/components/shared/LoadingLogo";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export default function ConvexClientProvider({children}: { children: ReactNode }) {
  return (
      <ClerkProvider>
        <ConvexProviderWithClerk  useAuth={useAuth} client={convex}>

          <Authenticated>{children}</Authenticated>
          <AuthLoading><LoadingLogo /></AuthLoading>
        </ ConvexProviderWithClerk>
      </ClerkProvider>

  )
};