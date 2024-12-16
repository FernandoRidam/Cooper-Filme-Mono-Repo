import * as yup from "yup"

const message = 'Campo Obrigatório';

const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required( message ),
  password: yup.string().required( message ),
});

export default loginSchema;
