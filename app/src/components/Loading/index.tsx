import { CircleNotch } from "@phosphor-icons/react";
import { LoadingView } from "./styles";
import { useStore } from "../../store";
import { Dialog } from "../Dialog";

export const Loading = () => {
  const {
    loading,
  } = useStore();

  return (
    <Dialog
      open={ loading }
    >
      <LoadingView>
        <CircleNotch
          size={ 56 }
        />

        <h1>Carregando...</h1>
      </LoadingView>
    </Dialog>
  );
};
