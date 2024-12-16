import * as yup from "yup"

const message = 'Campo Obrigatório';

const screenPlaySchema = yup.object({
  client_id: yup.string().nullable(),
  name: yup.string().required( message ),
  email: yup.string().email("Email inválido").required( message ),
  phone: yup.string().required( message ),
  title: yup.string().required( message ),
  content: yup.string().required( message ),
});

export default screenPlaySchema;
