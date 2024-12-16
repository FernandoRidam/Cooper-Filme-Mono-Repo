import { Input } from "../../../components/Input";
import { ScreenPlayAdminModal } from "../../../components/Modals/ScreenPlayAdminModal";
import { ScreenPlayCard } from "../../../components/ScreenPlayCard";
import { Content, ScreenPlaysGrid, ScreenPlaysView } from "../../../components/ScreenPlayList";
import { useScreenPlaysAdmin } from "../../../controllers/useScreenPlaysAdminController";

export const Home = () => {
  const {
    filteredScreenPlays,
    selectedScreenPlayId,
    setSelectedScreenPlayId,
    searchScreenPlays,
    setSearchScreenPlays,
  } = useScreenPlaysAdmin();

  return (
    <ScreenPlaysView>
      <div className="search-view">
        <Input>
          <input
            placeholder="Filtrar por título, conteúdo ou email"
            autoComplete="off"
            value={ searchScreenPlays }
            onChange={( event ) => setSearchScreenPlays( event.target.value )}
          />
        </Input>
      </div>

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

      <ScreenPlayAdminModal
        open={ Boolean( selectedScreenPlayId )}
        onClose={() => setSelectedScreenPlayId( null )}
        screenPlayId={ selectedScreenPlayId as string }
      />
    </ScreenPlaysView>
  );
};
