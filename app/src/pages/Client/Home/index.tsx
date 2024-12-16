import { ListChecks, PaperPlaneTilt } from "@phosphor-icons/react";
import { HomeView, LargeButton } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeView>
      <LargeButton onClick={() => navigate("/client/screenplays/send")}>
        <PaperPlaneTilt
          size={ 56 }
          weight="light"
        />

        <h3>Enviar Roteiro</h3>
      </LargeButton>

      <LargeButton onClick={() => navigate("/client/screenplays")}>
        <ListChecks
          size={ 56 }
          weight="light"
        />

        <h3>Status Roteiros</h3>
      </LargeButton>
    </HomeView>
  );
};
