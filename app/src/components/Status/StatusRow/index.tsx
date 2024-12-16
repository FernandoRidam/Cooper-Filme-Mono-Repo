import React from "react";
import { ScreenPlayStatus, Trail } from "../../../models/TrailModel";
import { DateView, IconView, InfoView, JustificationView, Rating, StatusView } from "./styles";
import { getStatusColor, getStatusText } from "../../../ultils/statusColorAndText";
import { ArrowCircleUp, CheckCircle, Circle, Clock, XCircle } from "@phosphor-icons/react";
import { format } from "date-fns";

export interface StatusRowProps {
  trail: Trail;
  isFirst: boolean;
};

export const StatusRow: React.FC<StatusRowProps> = ({
  trail,
  isFirst,
}) => {
  const iconSize = 24;

  const StatusIcon = (): React.ReactNode => {
    if( trail.fit === null ) return <Circle size={ iconSize } />;

    if( trail.fit ) {
      if( trail.status === ScreenPlayStatus.APPROVED ) return <CheckCircle size={ iconSize } />;

      if( trail.status === ScreenPlayStatus.REJECTED ) return <XCircle size={ iconSize } />;

      return <ArrowCircleUp size={ iconSize } />;
    } else return <ArrowCircleUp size={ iconSize } />;
  };

  return (
    <StatusView $isFirst={ isFirst } $color={ getStatusColor( trail.status )}>
      <div>
        <IconView $color={ getStatusColor( trail.status )}>
          { StatusIcon()}
        </IconView>

        <InfoView>
          <strong>{ getStatusText( trail.status )}</strong>

          <DateView>
            <Clock size={ 16 } />

            <span>{ format( trail.lastUpdatedOn, "dd/MM/yyyy 'às' HH:mm")}</span>
          </DateView>
        </InfoView>
      </div>

      {
        Boolean( trail.justification )
          ? <JustificationView>
              <span>Réplica</span>

              <pre>{ trail.justification }</pre>
            </JustificationView>
          : <></>
      }

      {
        Boolean( trail.status === ScreenPlayStatus.UNDER_APPROVAL && trail.rating )
          ? <Rating>{ trail.rating } Aprovaç{ trail.rating > 1 ? "ões" : "ão"}</Rating>
          : <></>
      }
    </StatusView>
  );
};
