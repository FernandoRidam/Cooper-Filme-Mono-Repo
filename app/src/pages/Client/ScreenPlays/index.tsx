import { Input } from "../../../components/Input";
import { ScreenPlayClientModal } from "../../../components/Modals/ScreenPlayClientModal";
import { ScreenPlayCard } from "../../../components/ScreenPlayCard";
import { useScreenPlaysClient } from "../../../controllers/useScreenPlaysClientController";
import { Content, ScreenPlaysGrid, ScreenPlaysView } from "../../../components/ScreenPlayList";

export const ScreenPlays = () => {
  const {
    form: {
      register,
      formState: {
        errors,
      }
    },
    screenPlays,
    filteredScreenPlays,
    handleSubmit,
    selectedScreenPlayId,
    setSelectedScreenPlayId,
    searchScreenPlays,
    setSearchScreenPlays,
  } = useScreenPlaysClient();

  return (
    <ScreenPlaysView>
      {
        screenPlays.length > 0
          ? (
              <div className="search-view">
                <Input>
                  <input
                    placeholder="Filtrar por título ou conteúdo"
                    autoComplete="off"
                    value={ searchScreenPlays }
                    onChange={( event ) => setSearchScreenPlays( event.target.value )}
                  />
                </Input>
              </div>
            )
          : (
              <form onSubmit={ handleSubmit }>
                <Input>
                  <input
                    placeholder="Escreva seu email e pressione Enter"
                    autoComplete="off"
                    { ...register("email")}
                  />

                  <span>{ errors.email?.message ?? ""}</span>
                </Input>
              </form>
            )
      }

      <Content>
        {
          filteredScreenPlays.length === 0
            ? (<h2>Nenhum roteiro</h2>)
            : (
                <ScreenPlaysGrid>
                  {
                    filteredScreenPlays.map(( screenPlay ) => (
                      <div key={ screenPlay.id }>
                        <ScreenPlayCard
                          { ...screenPlay }
                          onClick={() => setSelectedScreenPlayId( screenPlay.id )}
                        />
                      </div>
                    ))
                  }
                </ScreenPlaysGrid>
              )
        }
      </Content>

      <ScreenPlayClientModal
        open={ Boolean( selectedScreenPlayId )}
        onClose={() => setSelectedScreenPlayId( null )}
        screenPlayId={ selectedScreenPlayId as string }
      />
    </ScreenPlaysView>
  );
};
