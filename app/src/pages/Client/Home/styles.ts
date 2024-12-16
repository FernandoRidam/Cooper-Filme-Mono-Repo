import styled from "styled-components";

export const HomeView = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.x_very_large }px;
`;

export const LargeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary.default };
  border: none;
  border-radius: ${({ theme }) => theme.border_radius.medium }px;
  padding: ${({ theme }) => `${ theme.spacing.very_large }px ${ theme.spacing.very_large }px`};
  color: ${({ theme }) => theme.colors.primary.text };
  gap: ${({ theme }) => theme.spacing.x_very_large }px;
  transition: all .2s;
  cursor: pointer;

  & > h3 {
    min-height: ${({ theme }) => theme.font_size.very_large }px;
    font-size: ${({ theme }) => theme.font_size.very_large }px;
    line-height: ${({ theme }) => theme.font_size.very_large }px;
    font-weight: 500;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover };
    scale: 1.01;
  }

  &:active {
    scale: 0.98;
  }
`;
