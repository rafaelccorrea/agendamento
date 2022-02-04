import * as yup from 'yup';
import { MessagesValidations as messages } from '../constants';

const Agenda = {

  Create: yup.object({

    name: yup.string().required(messages.required),
    cellphone: yup.string().required(messages.required),
    date_compressed: yup.string().required(messages.required),
    barber_man: yup.string().required(messages.required)

  }),

  getById: yup.object({
    id: yup
    .number()
    .integer(messages.integer)
    .positive(messages.positive)
    .required(messages.required),

  }),

  Delete: yup.object({
    id: yup
      .number()
      .integer(messages.integer)
      .positive(messages.positive)
      .required(messages.required),
  }),

  update: yup.object({

    name: yup.string().required(messages.required),
    cellphone: yup.string().required(messages.required),
    date_compressed: yup.string().required(messages.required),
    barber_man: yup.string().required(messages.required)

  }),


}

export default Agenda
