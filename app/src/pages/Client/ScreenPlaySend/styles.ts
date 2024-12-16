import styled from "styled-components";

export const ScreenPlaySendView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.medium }px;
  width: 100%;
  height: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
