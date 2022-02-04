import { ClienteService } from "../services";
import { Request, generateToken } from "../utils";
import { UsuarioValidation } from "../validations";
import bcrypt from "bcrypt";

const request = new Request();

class ClienteController {

  static async signup(req, res) {
    try {
      const { password: reqPassword } = req.body;

      await UsuarioValidation.signup.validate(req.body, { abortEarly: false });

      const password = await bcrypt.hash(reqPassword, 10);

      const user = (await ClienteService.signup({ ...req.body, password })).get({
        plain: true,
      });

      if (user) {
        delete user.password;
        request.setSuccess(200, "Usuário cadastrado com sucesso!", {
          ...user,
          token: generateToken(user),
        });
      } else request.setError("Não foi possível cadastrar o usuário");

      return request.send(res);
    } catch (error) {
      request.setError(error);
      return request.send(res);
    }
  }

  static async signin(req, res) {
    try {
      const { login, password } = req.body;

      await UsuarioValidation.signin.validate(
        {
          login,
        },
        { abortEarly: false }
      );

      const user = await ClienteService.signin(login);

      if (!user) {
        request.setError("Usuario nao encontrado", 400)
        return request.send(res)
      }

      if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
          delete user.password;
          request.setSuccess(200, "Logado com sucesso!", {
            ...user,
            token: generateToken(user),
          });
        } else {
          request.setError("Erro ao verificar as credenciais de login", 404);
          return request.send(res);
        }
      } else request.setError("Nenhuma conta corresponde a esse login");

      return request.send(res);
    } catch (error) {
      request.setError(error);
      return request.send(res);
    }
  }

}

export default ClienteController;
