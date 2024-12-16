import { useStore } from "../store";
import { useEffect, useState } from "react";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { getAllScreenPlays } from "../services/screenPlayService";
import { enqueueSnackbar } from "notistack";

export const useScreenPlaysAdmin = () => {
  const {
    user,
    openLoading,
    closeLoading,
  } = useStore();

  const [ searchScreenPlays, setSearchScreenPlays ] = useState<string>("");

  const [ screenPlays, setScreenPlays ] = useState<Array<ScreenPlay>>([]);
  const [ selectedScreenPlayId, setSelectedScreenPlayId ] = useState<string | null>( null );

  const loadScreenPlays = async () => {
    openLoading();

    const res = await getAllScreenPlays( user?.token as string );

    closeLoading();

    if( Boolean( res.data )) {
      const screenPlays = res.data as Array<ScreenPlay> ?? [];

      setScreenPlays( screenPlays );

      if( screenPlays.length === 0 )
        enqueueSnackbar("Nenhum roteiro encontrado", {
          variant: 'info',
        });
    } else {
      enqueueSnackbar(res.message, {
        variant: res.data ? 'success' : 'error',
      });
    }
  };

  useEffect(() => {
    loadScreenPlays();
  }, [ user?.token ]);

  useEffect(() => {
    if(selectedScreenPlayId === null ) loadScreenPlays();
  }, [ selectedScreenPlayId ]);

  const filteredScreenPlays = screenPlays.filter(( screenPlay ) => {
    const search = searchScreenPlays.toLocaleLowerCase();

    return screenPlay.title.toLocaleLowerCase().includes( search ) ||
    screenPlay.content.toLocaleLowerCase().includes( search ) ||
    screenPlay.client.email.toLocaleLowerCase().includes( search )
});

  return {
    screenPlays,
    filteredScreenPlays,
    selectedScreenPlayId,
    setSelectedScreenPlayId,
    searchScreenPlays,
    setSearchScreenPlays,
  };
};
