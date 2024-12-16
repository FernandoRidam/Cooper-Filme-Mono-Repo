import styled from "styled-components";

export const ScreenPlaysView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.medium }px;
  width: 100%;
  height: 100%;

  & > form, & > div.search-view {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > h2 {
    min-height: ${({ theme }) => theme.font_size.very_large }px;
    font-size: ${({ theme }) => theme.font_size.very_large }px;
    line-height: ${({ theme }) => theme.font_size.very_large }px;
    color: ${({ theme }) => theme.colors.text.default };
  }
`;

export const ScreenPlaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat( 3, 1fr );
  grid-template-rows: repeat( 3, 1fr );
  gap: ${({ theme }) => theme.spacing.medium }px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium }px;

  & > div {
    display: flex;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
