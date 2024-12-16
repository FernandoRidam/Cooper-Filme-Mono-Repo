import { Button } from "../../../components/Buttons/Button";
import { Input } from "../../../components/Input";
import { useLogin } from "../../../controllers/useLoginController";
import { LoginView } from "./styles";

export const Login = () => {
  const {
    form: {
      register,
      formState: {
        errors,
        isValid,
      }
    },
    handleSubmit,
  } = useLogin();

  return (
    <LoginView>
      <form onSubmit={ handleSubmit }>
        <Input>
          <input
            placeholder="Email"
            autoComplete="off"
            { ...register("email")}
          />

          <span>{ errors.email?.message ?? ""}</span>
        </Input>

        <Input>
          <input
            placeholder="Senha"
            autoComplete="off"
            type="password"
            { ...register("password")}
          />

          <span>{ errors.password?.message ?? ""}</span>
        </Input>

        <Button
          type="submit"
          disabled={ !isValid }
        >
          Entrar
        </Button>
      </form>
    </LoginView>
  );
};
