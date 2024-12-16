import { Button } from "../../../components/Buttons/Button";
import { Input } from "../../../components/Input";
import { useScreenPlaySend } from "../../../controllers/useScreenPlaySendController";
import { ScreenPlaySendView } from "./styles";

export const ScreenPlaySend = () => {
  const {
    showScreenPlayForm,
    emailForm,
    screenPlayForm,
    handleSubmitEmailForm,
    handleSubmitScreenPlayForm,
  } = useScreenPlaySend();

  return (
    <ScreenPlaySendView>
      <form onSubmit={ handleSubmitEmailForm }>
        <Input>
          <input
            placeholder="Escreva seu email e pressione Enter"
            autoComplete="off"
            disabled={ showScreenPlayForm }
            { ...emailForm.register("email")}
          />

          <span>{ emailForm.formState.errors.email?.message ?? ""}</span>
        </Input>
      </form>

      {
        showScreenPlayForm
          ? (
              <form onSubmit={ handleSubmitScreenPlayForm }>
                <Input>
                  <input
                    placeholder="Seu nome"
                    autoComplete="off"
                    { ...screenPlayForm.register("name")}
                  />

                  <span>{ screenPlayForm.formState.errors.name?.message ?? ""}</span>
                </Input>

                <Input>
                  <input
                    placeholder="Seu telefone para contato"
                    autoComplete="off"
                    { ...screenPlayForm.register("phone")}
                  />

                  <span>{ screenPlayForm.formState.errors.phone?.message ?? ""}</span>
                </Input>

                <Input>
                  <input
                    placeholder="Título do roteiro"
                    autoComplete="off"
                    { ...screenPlayForm.register("title")}
                  />

                  <span>{ screenPlayForm.formState.errors.title?.message ?? ""}</span>
                </Input>

                <Input>
                  <textarea
                    placeholder="Roteiro"
                    autoComplete="off"
                    rows={ 16 }
                    { ...screenPlayForm.register("content")}
                  />

                  <span>{ screenPlayForm.formState.errors.content?.message ?? ""}</span>
                </Input>

                <Button
                  type="submit"
                  disabled={ !screenPlayForm.formState.isValid }
                >
                  Enviar
                </Button>
              </form>
            )
          : (<></>)
      }
    </ScreenPlaySendView>
  );
};
