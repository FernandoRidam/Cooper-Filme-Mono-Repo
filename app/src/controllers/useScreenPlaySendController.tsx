import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import clientEmailSchema from "../schemas/clientEmailSchema";
import { useStore } from "../store";
import { ClientEmailForm, ScreenPlayForm } from "../types/Forms";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { getClientByEmail } from "../services/clientService";
import { enqueueSnackbar } from "notistack";
import screenPlaySchema from "../schemas/screenPlaySchema";
import { useState } from "react";
import { Client } from "../models/ClientModel";
import { saveScreenPlay } from "../services/screenPlayService";
import { useNavigate } from "react-router-dom";

export const useScreenPlaySend = () => {
  const navigate = useNavigate();

  const {
    openLoading,
    closeLoading,
  } = useStore();

  const emailForm = useForm({
    resolver: yupResolver( clientEmailSchema ),
    defaultValues: {
      email: '',
    },
    mode: 'all',
  });

  const screenPlayForm = useForm({
    resolver: yupResolver( screenPlaySchema ),
    defaultValues: {
      client_id: null,
      name: "",
      email: "",
      phone: "",
      title: "",
      content: "",
    },
    mode: 'all',
  });

  const [ showScreenPlayForm, setShowScreenPlayForm ] = useState<boolean>( false );

  const onSubmitEmailForm = async ( data: ClientEmailForm ) => {
    openLoading();

    const res = await getClientByEmail( data.email );

    closeLoading();

    if( Boolean( res.data )) {
      const client = res.data as Client;

      screenPlayForm.setValue("client_id", client.id );
      screenPlayForm.setValue("email", client.email );
      screenPlayForm.setValue("name", client.name );
      screenPlayForm.setValue("phone", client.phone );

      enqueueSnackbar("Alguns dados do último envio estão disponívels caso deseja alterá-los", {
        variant: "info",
        autoHideDuration: 5000
      });
    } else {
      screenPlayForm.setValue("email", data.email );

      enqueueSnackbar("Novo(a) por aqui?! Seja bem vindo(a)!", {
        variant: "success",
        autoHideDuration: 5000
      });
    }

    setShowScreenPlayForm( true );
  };

  const onSubmitScreenPlayForm = async ( data: ScreenPlayForm ) => {
    openLoading();

    const res = await saveScreenPlay( data );

    closeLoading();

    if( Boolean( res.data ))
      navigate(`/client/screenplays/${ data.email }`, {
        replace: true
      });
    else {
      enqueueSnackbar(res.message, {
        variant: 'error',
      });
    }
  }

  const handleSubmitEmailForm = emailForm.handleSubmit( onSubmitEmailForm );
  const handleSubmitScreenPlayForm = screenPlayForm.handleSubmit( onSubmitScreenPlayForm );

  return {
    emailForm,
    screenPlayForm,
    showScreenPlayForm,
    handleSubmitEmailForm,
    handleSubmitScreenPlayForm
  };
};
