import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "@remix-run/node";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET as string],
    secure: process.env.NODE_ENV === "production",
  },
});

const themeSessionResolver = createThemeSessionResolver(themeStorage);

export { themeSessionResolver };
