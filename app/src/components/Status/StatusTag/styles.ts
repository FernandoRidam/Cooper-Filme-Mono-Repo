import styled from "styled-components";
import { StatusColors } from "../../../types/StatusColors";

export const StatusView = styled.div<{
  $color: StatusColors;
}>`
  display: flex;
  padding: ${({ theme }) => `${ theme.spacing.small }px ${ theme.spacing.medium }px`};
  background-color: ${({ theme, $color }) => theme.colors[ $color ].hover }AA;
  border-radius: ${({ theme }) => theme.border_radius.medium }px;

  & > span {
    min-height: ${({ theme }) => theme.font_size.small }px;
    font-size: ${({ theme }) => theme.font_size.small }px;
    line-height: ${({ theme }) => theme.font_size.small }px;
    color: ${({ theme }) => theme.colors.primary.text };
    font-weight: 700;
  }
`;
