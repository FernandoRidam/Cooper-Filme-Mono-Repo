import { CustomTheme } from "../@types/styled-components";

export type StatusColors = keyof Pick<CustomTheme["colors"],
  "gray" |
  "primary" |
  "warning" |
  "info" |
  "secondary" |
  "selected" |
  "success" |
  "error"
>
