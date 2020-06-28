import "styled-components";
import { Theme } from "../theme";
//for theme typing
type Themes = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends Themes {}
}
