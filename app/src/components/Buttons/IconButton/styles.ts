import styled, { DefaultTheme } from "styled-components";

export type Color = keyof Omit<DefaultTheme["colors"], "text" | "background">;

export enum Variant {
  CICLE = "cicle",
  ROUNDED = "rounded",
};

export const Button = styled.button<{
  $color?: Color;
  $variant?: Variant;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.very_small }px;
  background-color: transparent;
  color: ${({ theme, $color }) => $color ? theme.colors[ $color ].text : theme.colors.text.default };
  border: none;
  cursor: pointer;
  transition: all .2s;
  border-radius: ${({ theme, $variant = Variant.ROUNDED }) => {
    const bordersRadius: {
      [ key in Variant ]: number | string;
    } = {
      [ Variant.CICLE ]: 100,
      [ Variant.ROUNDED ]: theme.border_radius.medium,
    };

    return bordersRadius[ $variant ];
  }}px;

  & > span {
    min-height: ${({ theme }) => theme.font_size.medium }px;
    font-size: ${({ theme }) => theme.font_size.medium }px;
    line-height: ${({ theme }) => theme.font_size.medium }px;
    padding: 0 ${({ theme }) => theme.spacing.small }px;
    font-weight: 700;
  }

  &:hover {
    opacity: .8;
    background-color: ${({ theme, $color }) => $color ? theme.colors[ $color ].hover : theme.colors.text.default }15;
  }

  &:active {
    scale: .8;
  }
`;
