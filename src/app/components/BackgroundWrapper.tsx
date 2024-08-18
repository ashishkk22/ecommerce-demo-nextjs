import { cn } from "@/utils";
import React, { FC, PropsWithChildren } from "react";

const BackgroundWrapper: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <div className={cn("bg-background font-sans text-textPrimary h-full", className)}>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
};

export default BackgroundWrapper;
