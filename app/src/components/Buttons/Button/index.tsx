import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 408px;
  background-color: ${({ theme }) => theme.colors.primary.default };
  border: none;
  border-radius: ${({ theme }) => theme.border_radius.medium }px;
  padding: ${({ theme }) => theme.spacing.medium }px;
  color: ${({ theme }) => theme.colors.primary.text };
  transition: all .2s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.primary.hover };
    scale: 1.01;
  }

  &:active:enabled {
    scale: 0.98;
  }

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.primary.default }88;
    filter: grayscale( 1 );
  }
`;
