import styled from "styled-components";

export const LoadingView = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.large }px;
  color: ${({ theme }) => theme.colors.primary.hover };

  & > svg {
    animation-name: ckw;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes ckw {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;
