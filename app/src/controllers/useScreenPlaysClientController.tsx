import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import clientEmailSchema from "../schemas/clientEmailSchema";
import { useStore } from "../store";
import { ClientEmailForm } from "../types/Forms";
import { useEffect, useState } from "react";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { getAllScreenPlaysByEmail } from "../services/screenPlayService";
import { enqueueSnackbar } from "notistack";
import { useParams } from "react-router-dom";

export const useScreenPlaysClient = () => {
  const { email } = useParams();

  const {
    openLoading,
    closeLoading,
  } = useStore();

  const form = useForm({
    resolver: yupResolver( clientEmailSchema ),
    defaultValues: {
      email: '',
    },
    mode: 'all',
  });

  const [ searchScreenPlays, setSearchScreenPlays ] = useState<string>("");

  const [ screenPlays, setScreenPlays ] = useState<Array<ScreenPlay>>([]);
  const [ selectedScreenPlayId, setSelectedScreenPlayId ] = useState<string | null>( null );

  const loadScreenPlays = async ( email: string ) => {
    openLoading();

    const res = await getAllScreenPlaysByEmail( email );

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

  const onSubmit = async ( data: ClientEmailForm ) => loadScreenPlays( data.email );

  const handleSubmit = form.handleSubmit( onSubmit );

  useEffect(() => {
    if( email && selectedScreenPlayId === null ) {
      form.setValue("email", email );

      loadScreenPlays( email );
    }
  }, [ email, selectedScreenPlayId ]);

  const filteredScreenPlays = screenPlays.filter(( screenPlay ) => screenPlay.title.toLocaleLowerCase().includes( searchScreenPlays.toLocaleLowerCase()) || screenPlay.content.toLocaleLowerCase().includes( searchScreenPlays.toLocaleLowerCase()));

  return {
    form,
    screenPlays,
    filteredScreenPlays,
    selectedScreenPlayId,
    handleSubmit,
    setSelectedScreenPlayId,
    searchScreenPlays,
    setSearchScreenPlays,
  };
};
