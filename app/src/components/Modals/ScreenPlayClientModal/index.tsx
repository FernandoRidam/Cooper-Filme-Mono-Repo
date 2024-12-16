import { useScreenPlayClientModal } from "../../../controllers/useScreenPlayClientModal";
import { Dialog, DialogProps } from "../../Dialog";
import { StatusRow } from "../../Status/StatusRow";
import { ScreenPlayClientModalView, ScreenPlayView, StatusView } from "./styles";

export interface ScreenPlayClientModalProps extends Omit<DialogProps, "children"> {
  screenPlayId: string;
};

export const ScreenPlayClientModal: React.FC<ScreenPlayClientModalProps> = ({
  open,
  screenPlayId,
  ...rest
}) => {
  const {
    screenPlay
  } = useScreenPlayClientModal( screenPlayId );

  return (
    <Dialog
      open={ open }
      { ...rest }
    >
      <ScreenPlayClientModalView
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{ duration: .4 }}
      >
        {
          screenPlay && (
            <>
              <div>
                <h2>Roteiro</h2>

                <h4>{ screenPlay.title }</h4>

                <ScreenPlayView>
                  <pre>{ screenPlay.content }</pre>
                </ScreenPlayView>
              </div>

              <div>
                <h3>Status</h3>

                <StatusView>
                  {
                    screenPlay.trail.map(( trailItem, index ) => (
                      <StatusRow
                        key={ trailItem.id }
                        trail={ trailItem }
                        isFirst={ index === 0 }
                      />
                    ))
                  }
                </StatusView>
              </div>
            </>
          )
        }
      </ScreenPlayClientModalView>
    </Dialog>
  );
};
