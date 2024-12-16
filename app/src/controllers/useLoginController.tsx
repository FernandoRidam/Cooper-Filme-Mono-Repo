import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "../store";
import loginSchema from "../schemas/loginSchema";
import { LoginForm } from "../types/Forms";
import { login } from "../services/authService";
import { enqueueSnackbar } from "notistack";
import { User } from "../models/UserModel";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const {
    openLoading,
    closeLoading,
    storeLogin,
  } = useStore();

  const form = useForm({
    resolver: yupResolver( loginSchema ),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  });

  const onSubmit = async ( data: LoginForm ) => {
    openLoading();

    const res = await login( data.email, data.password );

    closeLoading();

    if( Boolean( res.data )) {
      storeLogin( res.data as User );

      navigate("/");
    } else {
      enqueueSnackbar(res.message, {
        variant: res.data ? 'success' : 'error',
      });
    }
  };

  const handleSubmit = form.handleSubmit( onSubmit );

  return {
    form,
    handleSubmit,
  };
};
