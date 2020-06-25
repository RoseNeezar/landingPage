import "styled-components";
import { Theme } from "../theme";

type Themes = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends Themes {}
}
