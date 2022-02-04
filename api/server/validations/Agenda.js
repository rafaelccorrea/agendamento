import * as yup from 'yup';
import { MessagesValidations as messages } from '../constants';

const Agenda = {

  buscaAgendamento: yup.object({
    id: yup
      .number()
      .integer(messages.integer)
      .positive(messages.positive)
      .required(messages.required),
  }),

}

export default Agenda;
