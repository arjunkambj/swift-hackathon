"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC } from "react";

export const ThemeProvider: FC<
  React.ComponentProps<typeof NextThemesProvider>
> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
