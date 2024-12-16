import api from "../config/api";
import { Client } from "../models/ClientModel";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { ServiceResponse } from "../types/Response";

export const getClientByEmail = async ( email: string ): Promise<ServiceResponse<Client>> => {
  try {
    const {
      data
    } = await api.get(`/clients/${ email }`);

    return {
      data,
      message: ""
    };
  } catch ( error: any ) {
    return {
      data: false,
      message: error?.response?.data ?? "Algo deu errado",
    };
  }
};
