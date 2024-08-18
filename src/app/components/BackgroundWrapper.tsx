import React, { FC, PropsWithChildren } from "react";

const BackgroundWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background font-sans text-textPrimary h-full">
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
};

export default BackgroundWrapper;
