import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background };
`;

export const TopBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium }px;
  background-color: ${({ theme }) => theme.colors.primary.default };

  & > h1 {
    color: ${({ theme }) => theme.colors.primary.text };
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium }px;
  min-width: 116px;

  & > div {
    flex: 1;
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
  overflow: hidden;
`;
