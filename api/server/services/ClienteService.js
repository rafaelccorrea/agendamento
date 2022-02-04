/* eslint-disable no-useless-catch */
import database from "../src/models";
import { Op } from "sequelize";

class ClienteService {

    static async signup(dados) {
        try {
            return await database.Cliente.create(dados);
        } catch (error) {
            throw error;
        }
    }

    static async signin(login) {
        try {
          return await database.Cliente.findOne({
            where: {
              [Op.or]: [{ email: login }, { cpf: login }, { cellphone: login }],
            },
            raw: true,
          });
        } catch (error) {
          throw error;
        }
      }


}

export default ClienteService;
