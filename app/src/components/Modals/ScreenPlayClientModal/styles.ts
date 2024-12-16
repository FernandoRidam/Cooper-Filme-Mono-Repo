import { motion } from "framer-motion";
import styled from "styled-components";

export const ScreenPlayClientModalView = styled( motion.div )`
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

export const StatusView = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium }px;
  margin-top: ${({ theme }) => theme.spacing.small }px;
  overflow: auto;
  padding-right: ${({ theme }) => theme.spacing.small }px;
`;
