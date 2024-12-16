import { motion } from "framer-motion";
import styled from "styled-components";

export const DialogView = styled(motion.dialog)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  inset: ${({ theme }) => theme.spacing.none };
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.background }E6;
  padding: ${({ theme }) => theme.spacing.very_large }px;
`;
