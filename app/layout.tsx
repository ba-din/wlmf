import { Flowbite, ThemeModeScript } from "flowbite-react";
import { type FC, type PropsWithChildren } from "react";
import "./globals.css";
import { flowbiteTheme } from "./theme";
import { inter, notoSans, quicksand } from "./fonts";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${quicksand.variable} ${notoSans.variable}`}
    >
      <head>
        <ThemeModeScript />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
