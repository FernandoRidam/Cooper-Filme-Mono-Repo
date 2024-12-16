import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";

import { useStore } from "../store";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { getScreenPlay, sendChangeStatus } from "../services/screenPlayService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import sendChangeStatusSchema from "../schemas/sendChangeStatusSchema";
import { SendChangeStatus } from "../types/Forms";

export const useScreenPlayAdminModal = ( id: string ) => {
  const {
    user,
    openLoading,
    closeLoading,
  } = useStore();

  const form = useForm({
    resolver: yupResolver( sendChangeStatusSchema ),
    defaultValues: {
      fit: true,
      justification: null,
    },
    mode: 'all',
  });

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

  const onSubmit = async ( data: SendChangeStatus ) => {
    openLoading();

    const res = await sendChangeStatus( user?.token as string, screenPlay?.id as string, data );

    closeLoading();

    if( Boolean( res.data ))
      loadScreenPlay();
    else {
      enqueueSnackbar(res.message, {
        variant: 'error',
      });
    }
  };

  const handleSubmit = form.handleSubmit( onSubmit );

  useEffect(() => {
    if( id ) {
      loadScreenPlay();
    }
  }, [ id ]);

  const lastTrailItem = screenPlay?.trail.reduce((latest, current) => {
    return current.createdOn > latest.createdOn ? current : latest;
  }, screenPlay?.trail[0]);

  return {
    user,
    form,
    screenPlay,
    lastTrailItem,
    handleSubmit,
  };
};
