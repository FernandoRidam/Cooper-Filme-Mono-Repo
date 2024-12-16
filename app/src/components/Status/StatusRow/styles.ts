import styled from "styled-components";
import { StatusColors } from "../../../types/StatusColors";

export const StatusView = styled.div<{
  $isFirst: boolean;
  $color: StatusColors;
}>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${ theme.spacing.small }px ${ theme.spacing.small }px`};
  border-radius: ${({ theme }) => theme.border_radius.medium }px;
  background-color: ${({ theme, $color }) => theme.colors[ $color ].hover }22;
  border: ${({ theme, $isFirst, $color }) => $isFirst ? `1px solid ${ theme.colors[ $color ].hover }` : "none"};

  & > div:first-of-type {
    display: flex;
    flex-direction: row;
  }
`;

export const IconView = styled.div<{
  $color: StatusColors;
}>`
  display: flex;
  align-self: flex-start;
  padding: ${({ theme }) => theme.spacing.very_small }px;
  background-color: ${({ theme, $color }) => theme.colors[ $color ].hover }AA;
  border-radius: 100%;
  margin-right: ${({ theme }) => theme.spacing.medium }px;
  color: ${({ theme }) => theme.colors.primary.text };
`;

export const InfoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > strong {
    min-height: ${({ theme }) => theme.font_size.small }px;
    font-size: ${({ theme }) => theme.font_size.small }px;
    line-height: ${({ theme }) => theme.font_size.small }px;
    color: ${({ theme }) => theme.colors.text.default };
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const JustificationView = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.medium }px;

  & > span {
    min-height: ${({ theme }) => theme.font_size.medium }px;
    font-size: ${({ theme }) => theme.font_size.medium }px;
    line-height: ${({ theme }) => theme.font_size.medium }px;
    color: ${({ theme }) => theme.colors.text.default };
    margin-bottom: ${({ theme }) => theme.spacing.small }px;
    font-weight: 500;
  }

  & > pre {
    white-space: pre-wrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    padding-right: ${({ theme }) => theme.spacing.medium }px;
    color: ${({ theme }) => theme.colors.text.default }CC;

    min-height: ${({ theme }) => theme.font_size.small }px;
    font-size: ${({ theme }) => theme.font_size.small }px;
  }
`;

export const DateView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.very_small }px;

  & > svg {
    margin-right: ${({ theme }) => theme.spacing.very_small }px;
    color: ${({ theme }) => theme.colors.selected.hover };
    font-size: ${({ theme }) => theme.font_size.very_small }px;
  }

  & > span {
    min-height: ${({ theme }) => theme.font_size.very_small }px;
    font-size: ${({ theme }) => theme.font_size.very_small }px;
    line-height: ${({ theme }) => theme.font_size.very_small }px;
    color: ${({ theme }) => theme.colors.selected.hover };
    font-weight: 900;
  }
`;

export const Rating = styled.span`
  width: 100%;
  text-align: end;
  margin-top: ${({ theme }) => theme.spacing.very_small }px;
  min-height: ${({ theme }) => theme.font_size.very_small }px;
  font-size: ${({ theme }) => theme.font_size.very_small }px;
  line-height: ${({ theme }) => theme.font_size.very_small }px;
  color: ${({ theme }) => theme.colors.success.default };
  font-weight: 500;
`;
