import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";

import { useStore } from "../store";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { getScreenPlay } from "../services/screenPlayService";

export const useScreenPlayClientModal = ( id: string ) => {
  const {
    openLoading,
    closeLoading,
  } = useStore();

  const [ screenPlay, screenPlayId ] = useState<ScreenPlay | null>( null );

  const loadScreenPlay = async () => {
    openLoading();

    const res = await getScreenPlay( id );

    closeLoading();

    if( Boolean( res.data )) {
      const screenPlay = res.data as ScreenPlay ?? null;

      screenPlayId( screenPlay );
    } else {
      enqueueSnackbar(res.message, {
        variant: res.data ? 'success' : 'error',
      });
    }
  };

  useEffect(() => {
    if( id ) {
      loadScreenPlay();
    }
  }, [ id ]);

  return {
    screenPlay,
  };
};
