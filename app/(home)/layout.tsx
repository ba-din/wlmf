"use client";

import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { HomeNavbar } from "../../components/navbar";
import { HomeFooter } from "@/components/footer";
import LoaderSimple from "@/components/loading";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return <HomeLayoutContent>{children}</HomeLayoutContent>;
};

const HomeLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <LoaderSimple />
      <HomeNavbar />
      <div className="mt-15 flex items-start">
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900"
          )}
        >
          {children}
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default DashboardLayout;
