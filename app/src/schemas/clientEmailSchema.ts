import * as yup from "yup"

const message = 'Campo Obrigatório';

const clientEmailSchema = yup.object({
  email: yup.string().email("Email inválido").required( message ),
});

export default clientEmailSchema;
