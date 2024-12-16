import { ScreenPlayStatus } from "../models/TrailModel";
import { StatusColors } from "../types/StatusColors";

export const getStatusText = ( status: ScreenPlayStatus ): string => {
  const mapStatus: {
    [ key in ScreenPlayStatus ]: string;
  } = {
    AWAITING_ANALYSIS: "AGUARDANDO ANÁLISE",
    UNDER_ANALYSIS: "EM ANÁLISE",
    AWAITING_REVIEW: "AGUARDANDO REVISÃO",
    UNDER_REVIEW: "EM REVISÃO",
    AWAITING_APPROVAL: "AGUARDANDO APROVAÇÃO",
    UNDER_APPROVAL: "EM APROVAÇÃO",
    APPROVED: "APROVADO",
    REJECTED: "RECUSADO",
  }

  return mapStatus[ status ];
};

export const getStatusColor = ( status: ScreenPlayStatus ): StatusColors => {
  const mapStatus: {
    [ key in ScreenPlayStatus ]: StatusColors;
  } = {
    AWAITING_ANALYSIS: "gray",
    UNDER_ANALYSIS: "warning",
    AWAITING_REVIEW: "selected",
    UNDER_REVIEW: "primary",
    AWAITING_APPROVAL: "info",
    UNDER_APPROVAL: "secondary",
    APPROVED: "success",
    REJECTED: "error",
  }

  return mapStatus[ status ];
};

export const getSendButtonText = ( status: ScreenPlayStatus ): string => {
  const mapStatus: {
    [ key in ScreenPlayStatus ]: string;
  } = {
    AWAITING_ANALYSIS: "ENVIAR PARA ANÁLISE",
    UNDER_ANALYSIS: "ENVIAR",
    AWAITING_REVIEW: "ENVIAR PARA REVISÃO",
    UNDER_REVIEW: "ENVIAR PARA APROVAÇÃO",
    AWAITING_APPROVAL: "ENVIAR",
    UNDER_APPROVAL: "ENVIAR",
    APPROVED: "",
    REJECTED: "",
  }

  return mapStatus[ status ];
};

export const getApprovalButtonText = ( status: ScreenPlayStatus ): string => {
  const mapStatus: {
    [ key in ScreenPlayStatus ]: string;
  } = {
    AWAITING_ANALYSIS: "ANALISAR",
    UNDER_ANALYSIS: "ENVIAR PARA REVISÃO",
    AWAITING_REVIEW: "REVISAR",
    UNDER_REVIEW: "ENVIAR PARA APROVAÇÃO",
    AWAITING_APPROVAL: "APROVAR",
    UNDER_APPROVAL: "APROVAR",
    APPROVED: "",
    REJECTED: "",
  }

  return mapStatus[ status ];
};
