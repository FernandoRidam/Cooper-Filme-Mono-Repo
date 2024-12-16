import * as yup from "yup"

const message = 'Campo Obrigatório';

const sendChangeStatusSchema = yup.object({
  fit: yup.boolean().required( message ),
  justification: yup.string().nullable(),
});

export default sendChangeStatusSchema;
