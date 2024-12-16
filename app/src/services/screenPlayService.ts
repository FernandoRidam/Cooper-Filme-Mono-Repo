import api from "../config/api";
import { ScreenPlay } from "../models/ScreenPlayModel";
import { Trail } from "../models/TrailModel";
import { ServiceResponse } from "../types/Response";

export const saveScreenPlay = async ( screenPlay: Partial<ScreenPlay> ): Promise<ServiceResponse<ScreenPlay>> => {
  try {
    const {
      data
    } = await api.post(`/screenplays`, screenPlay );

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

export const getAllScreenPlaysByEmail = async ( email: string ): Promise<ServiceResponse<Array<ScreenPlay>>> => {
  try {
    const {
      data
    } = await api.get(`/clients/${ email }/screenplays`);

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

export const getAllScreenPlays = async ( token: string ): Promise<ServiceResponse<Array<ScreenPlay>>> => {
  try {
    const {
      data
    } = await api.get(`/screenplays`, {
      headers: {
        "Authorization": `Bearer ${ token }`
      }
    });

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

export const getScreenPlay = async ( id: string ): Promise<ServiceResponse<ScreenPlay>> => {
  try {
    const {
      data
    } = await api.get(`/screenplays/${ id }`);

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

export const sendChangeStatus = async ( token: string, id: string, trail: Partial<Trail> ): Promise<ServiceResponse<ScreenPlay>> => {
  try {
    const {
      data
    } = await api.patch(`/screenplays/${ id }/trail`, trail, {
      headers: {
        "Authorization": `Bearer ${ token }`
      }
    });

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
