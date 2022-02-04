/* eslint-disable no-useless-catch */
import database from "../src/models";

class AgendaService {

  static async create(store) {
    try {
      return await database.Agenda.create(store);
    } catch (error) {
      throw error;
    }
  }

  static async deleteAgenda(id, userId) {
    try {
      const Agenda = await database.Agenda.findByPk(id);

      if (Agenda) {
        const deleteAdd = await database.Agenda.destroy({
          where: { id: id, userId: userId },
        });
        return deleteAdd;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async updateAgenda(agendaId, userId, updateAbout) {
    try {

      const Agenda = await database.Agenda.findByPk(agendaId);

      if (Agenda) {
        const updatedAgenda = await database.Agenda.update(updateAbout, {
          where: { id: agendaId, userId: userId },
          returning: true,
          plain: true,
        });

        return updatedAgenda[1];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAgendaById(id, userId) {
    try {
      const Agenda = await database.Agenda.findOne({
        where: {id: id , userId: userId},
      })
      return Agenda;
    } catch (error) {
      throw error;
    }
  }

  static async getAllAgenda(userId) {
    try {
      return await database.Agenda.findAll({
        where: { userId: userId}
      });
    } catch (error) {
      throw error;
    }
  }


}

export default AgendaService;
