import React, { ReactNode } from "react";
import styled from "styled-components";
//typing for styled-component and style-systems
//essentially I just wrapped methods/attribute from styled-component to style-system
import {
  compose,
  buttonStyle,
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
  grid,
  GridProps,
  shadow,
  ShadowProps,
  width,
  WidthProps,
  minWidth,
  MinWidthProps,
  height,
  HeightProps,
  minHeight,
  MinHeightProps,
  ButtonStyleProps,
} from "styled-system";

export type StyledSystemProps =
  | SpaceProps
  | ButtonStyleProps
  | LayoutProps
  | TypographyProps
  | ColorProps
  | FlexboxProps
  | BorderProps
  | BackgroundProps
  | PositionProps
  | GridProps
  | ShadowProps
  | WidthProps
  | MinWidthProps
  | HeightProps
  | MinHeightProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | {
      color: string;
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any> | ReactNode;
    };

export const styledSystemC = (tag: StyledSystemProps | any) => {
  return styled(tag)(
    compose(
      space,
      buttonStyle,
      color,
      layout,
      typography,
      flexbox,
      border,
      background,
      position,
      grid,
      shadow,
      width,
      minWidth,
      height,
      minHeight
    )
  );
};
