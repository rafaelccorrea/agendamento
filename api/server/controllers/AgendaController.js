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

    static async atualizarAgenda(req, res) {
        try {

            await AgendaValidation.update.validate(req.body, {
                abortEarly: false,
            });

            const userId = req.dataReq.id;

            const compromisso = await AgendaService.updateAgenda(req.params.id, userId, {
                ...req.body
            });

            if (compromisso) {
                request.setSuccess(200, "Compromisso Atualizado com sucesso", compromisso);
            } else request.setError("Não foi possível Atualizar este compromisso");
            return request.send(res);

        } catch (error) {
            request.setError(error);
            return request.send(res);
        }
    }


    static async deleteAgenda(req, res) {
        try {

            await AgendaValidation.Delete.validate(req.body, {
                abortEarly: false,
            });

            const existCompromisso = await AgendaService.getAgendaById(req.params.id)

            if (!existCompromisso) {
                request.setError('Não existe Compromisso!', 400)
                return request.send(res);
            }

            const compromisso = await AgendaService.deleteAgenda(req.params.id, req.dataReq.id)

            if (compromisso) {
                request.setSuccess(200, "Compromisso Deletada com sucesso", compromisso);
            } else request.setError("Não foi possível deletar este compromisso");
            return request.send(res);
        } catch (error) {
            request.setError(error);
            return request.send(res);
        }
    }

    static async listIdAgenda(req, res) {
        try {

            await AgendaValidation.getById.validate(req.body, {
                abortEarly: false,
            });

            const compromisso = await AgendaService.getAgendaById(req.params.id, req.dataReq.id)

            if (!compromisso) {
                request.setError('Não existe Compromisso!', 400)
                return request.send(res);
            }

            if (compromisso) {
                request.setSuccess(200, "Compromisso Listado com sucesso", compromisso);
            } else request.setError("Não foi possível listar este compromisso");
            return request.send(res);

        } catch (error) {
            request.setError(error);
            return request.send(res);
        }
    }

    static async listAllAgenda(req, res) {
        try {

            const compromisso = await AgendaService.getAllAgenda(req.dataReq.id)

            if (!compromisso) {
                request.setError('Não existe Compromissos!', 400)
                return request.send(res);
            }

            if (compromisso) {
                request.setSuccess(200, "Compromissos Listados com sucesso", compromisso);
            } else request.setError("Não foi possível listar os compromissos");
            return request.send(res);

        } catch (error) {
            request.setError(error);
            return request.send(res);
        }
    }
}

export default AgendaController;
