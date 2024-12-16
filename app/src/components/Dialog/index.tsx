import { AnimatePresence, motion } from "framer-motion";

import { DialogView } from "./styles";
import { OutsideClick } from "../OutSideClick";

export interface DialogProps {
  children: JSX.Element;
  open: boolean;
  onClose?: () => void;
};

export const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  onClose = () => {},
}) => {
  return (
    <AnimatePresence>
      {
        open && (
          <DialogView
            open
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration : .2 }}
          >
            <OutsideClick
              executeCallback={ open }
              callback={ onClose }
            >
              { children }
            </OutsideClick>
          </DialogView>
        )

      }
    </AnimatePresence>
  );
};
