import styled from "styled-components";

export const ScreenPlayCardView = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  transition: all .2s;

  &:hover:enabled {
    scale: 1.005;
  }

  &:active:enabled {
    scale: 0.995;
  }
`;

export const ScreenPlayCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 232px;
  padding: ${({ theme }) => theme.spacing.medium }px;
  background-color: ${({ theme }) => theme.colors.background };
  border-radius: ${({ theme }) => theme.border_radius.medium }px;
  box-shadow: ${({ theme }) => theme.shadow.selected };
  overflow: hidden;

  color: ${({ theme }) => theme.colors.text.default };

  & > h5 {
    text-align: left;
    width: 100%;

    min-height: ${({ theme }) => theme.font_size.large }px;
    font-size: ${({ theme }) => theme.font_size.large }px;
    line-height: ${({ theme }) => theme.font_size.large }px;
    font-weight: 600;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > pre {
    white-space: pre-wrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    color: ${({ theme }) => theme.colors.gray.hover };
    margin: ${({ theme }) => theme.spacing.medium }px 0;

    min-height: ${({ theme }) => theme.font_size.medium }px;
    font-size: ${({ theme }) => theme.font_size.medium }px;
    font-weight: 300;
  }
`;
