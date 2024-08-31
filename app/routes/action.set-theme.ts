import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "../session.server";

export const action = createThemeAction(themeSessionResolver);
