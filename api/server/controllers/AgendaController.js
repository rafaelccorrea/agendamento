import { AgendaService } from "../services";
import { Request } from "../utils";
import { AgendaValidation } from "../validations";

const request = new Request();

class AgendaController {

    static async criarAgenda(req, res) {

        try {

            await AgendaValidation.Create.validate(req.body, {
                abortEarly: false,
            });

            const userId = req.dataReq.id;

            let compromisso = null;

            if (userId) {
                compromisso = (
                    await AgendaService.create({
                        ...req.body,
                        userId
                    })
                );
            }

            if (compromisso) {
                request.setSuccess(200, "Agenda Criada com sucesso", compromisso);
            } else request.setError("Não foi possível Criar esta Agenda");
            return request.send(res);
        } catch (error) {
            request.setError(error);
            return request.send(res);
        }

    }

}

export default AgendaController;
