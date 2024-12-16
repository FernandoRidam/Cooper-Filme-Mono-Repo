import { theme } from "../config/theme";

type CustomTheme = typeof theme.light;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
