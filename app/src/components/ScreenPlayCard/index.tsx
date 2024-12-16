import { ScreenPlay } from "../../models/ScreenPlayModel";
import { StatusTag } from "../Status/StatusTag";
import { ScreenPlayCardContent, ScreenPlayCardView } from "./styles";

export interface ScreenPlayCardProps extends ScreenPlay {
  onClick: () => void;
};

export const ScreenPlayCard: React.FC<ScreenPlayCardProps> = ({
  title,
  content,
  trail,
  onClick,
}) => {
  const lastTrailItem = trail.reduce((latest, current) => {
    return current.createdOn > latest.createdOn ? current : latest;
  }, trail[0]);

  return (
    <ScreenPlayCardView onClick={ onClick }>
      <ScreenPlayCardContent>
        <h5>{ title }</h5>

        <pre>{ content.length > 310 ? `${ content.substring( 0, 310 )}...` : content }</pre>

        <StatusTag
          status={ lastTrailItem.status }
        />
      </ScreenPlayCardContent>
    </ScreenPlayCardView>
  );
};
