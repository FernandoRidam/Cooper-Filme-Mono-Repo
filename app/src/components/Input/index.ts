import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 408px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.small }px;

  & > input, & > textarea {
    resize: vertical;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary.default };
    border-radius: ${({ theme }) => theme.border_radius.medium }px;
    background-color: ${({ theme }) => theme.colors.background };
    color: ${({ theme }) => theme.colors.text.default };
    padding: ${({ theme }) => theme.spacing.medium }px;

    min-height: ${({ theme }) => theme.font_size.large }px;
    font-size: ${({ theme }) => theme.font_size.large }px;
    line-height: ${({ theme }) => theme.font_size.large }px;
    font-weight: 700;
  }

  & > input:disabled {
    opacity: .4;
    filter: grayscale( 1 );
  }

  & > span {
    min-height: ${({ theme }) => theme.font_size.small }px;
    font-size: ${({ theme }) => theme.font_size.small }px;
    line-height: ${({ theme }) => theme.font_size.small }px;

    margin-top: ${({ theme }) => theme.spacing.small }px;
    margin-left: ${({ theme }) => theme.spacing.small }px;
    color: ${({ theme }) => theme.colors.error.default };
    height: 14px;
  }
`;
