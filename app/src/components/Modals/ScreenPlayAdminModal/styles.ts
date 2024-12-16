import { motion } from "framer-motion";
import styled from "styled-components";

export const ScreenPlayAdminModalView = styled( motion.div )`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-width: 1096px;
  max-height: 696px;
  gap: ${({ theme }) => theme.spacing.medium }px;
  background-color: ${({ theme }) => theme.colors.background };
  border-radius: ${({ theme }) => theme.border_radius.medium }px;
  box-shadow: ${({ theme }) => theme.shadow.default };

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text.default };
    padding: ${({ theme }) => theme.spacing.large }px;
    overflow: hidden;
  }

  & > div:first-of-type {
    flex: 2;
    padding-right: 0;

    & > h4 {
      margin-top: ${({ theme }) => theme.spacing.small }px;
    }
  }

  & > div:last-of-type {
    padding-left: 0;
  }

  & > div.status-column > div:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const ClientInfoView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.small }px;

  & > strong {
    min-height: ${({ theme }) => theme.font_size.small }px;
    font-size: ${({ theme }) => theme.font_size.small }px;
    line-height: ${({ theme }) => theme.font_size.small }px;
    color: ${({ theme }) => theme.colors.text.default };
  }

  & > span {
    min-height: ${({ theme }) => theme.font_size.very_small }px;
    font-size: ${({ theme }) => theme.font_size.very_small }px;
    line-height: ${({ theme }) => theme.font_size.very_small }px;
    color: ${({ theme }) => theme.colors.text.default };
    margin-top: ${({ theme }) => theme.spacing.very_small }px;
  }
`;

export const ScreenPlayView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;

  & > pre {
    margin-top: ${({ theme }) => theme.spacing.small }px;
    white-space: pre-wrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    flex: 1;
    overflow: auto;
    padding-right: ${({ theme }) => theme.spacing.medium }px;

    min-height: ${({ theme }) => theme.font_size.medium }px;
    font-size: ${({ theme }) => theme.font_size.medium }px;
    font-weight: 300;
  }
`;

export const ChangeStatusView = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.medium }px;
  margin-top: ${({ theme }) => theme.spacing.small }px;
  overflow: auto;
  flex: 1;

  & > form {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small }px;
  }
`;

export const StatusView = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium }px;
  margin-top: ${({ theme }) => theme.spacing.small }px;
  overflow: auto;
  padding-right: ${({ theme }) => theme.spacing.small }px;
`;

export const FitButton = styled.div<{
  $fit: boolean;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.small }px;
  margin-bottom: ${({ theme }) => theme.spacing.medium }px;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: ${({ theme }) => theme.spacing.medium }px;
    background-color: ${({ theme }) => theme.colors.background };
    border-radius: ${({ theme }) => theme.border_radius.medium }px;
    cursor: pointer;
    transition: all .2s;
  }

  & > button:hover:enabled {
    scale: 1.04;
  }

  & > button:active:enabled {
    scale: 0.98;
  }

  & > button:first-of-type {
    background-color: ${({ theme, $fit }) => $fit ? theme.colors.success.default : theme.colors.background };
    border: 1px solid ${({ theme }) => theme.colors.success.default };
    color: ${({ theme, $fit }) => !$fit ? theme.colors.success.default : theme.colors.primary.text };
  }

  & > button:last-of-type {
    background-color: ${({ theme, $fit }) => !$fit ? theme.colors.error.default : theme.colors.background };
    border: 1px solid ${({ theme }) => theme.colors.error.default };
    color: ${({ theme, $fit }) => $fit ? theme.colors.error.default : theme.colors.primary.text };
  }

  & > button > span {
    white-space: nowrap;
    min-height: ${({ theme }) => theme.font_size.very_small }px;
    font-size: ${({ theme }) => theme.font_size.very_small }px;
    line-height: ${({ theme }) => theme.font_size.very_small }px;
    font-weight: 700;
  }
`;
