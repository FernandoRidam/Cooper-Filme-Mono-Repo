import api from "../config/api";
import { User } from "../models/UserModel";
import { ServiceResponse } from "../types/Response";

export const login = async ( email: string, password: string ): Promise<ServiceResponse<User>> => {
  try {
    const {
      data: {
        user,
        token,
      }
    } = await api.post(`/auth/login`, {
      email,
      password,
    });

    return {
      data: {
        ...user,
        token,
      },
      message: ""
    };
  } catch ( error: any ) {
    return {
      data: false,
      message: error?.response?.data ?? "Algo deu errado",
    };
  }
};
