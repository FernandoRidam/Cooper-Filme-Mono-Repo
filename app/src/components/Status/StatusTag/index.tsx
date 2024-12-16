import React from "react";
import { ScreenPlayStatus } from "../../../models/TrailModel";
import { StatusView } from "./styles";
import { getStatusColor, getStatusText } from "../../../ultils/statusColorAndText";

export interface StatusTagProps {
  status: ScreenPlayStatus;
};

export const StatusTag: React.FC<StatusTagProps> = ({
  status,
}) => {
  return (
    <StatusView $color={ getStatusColor( status )}>
      <span>{ getStatusText( status )}</span>
    </StatusView>
  );
};
