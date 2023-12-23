import { FavoritesPageStyled } from "./FavoritesPage.styled";
import FavoritesTeachers from "components/FavoritesTeachers/FavoritesTeachers";


const FavoritePage = () => {
  return (
    <FavoritesPageStyled>

      <FavoritesTeachers />
    </FavoritesPageStyled>
  );
};

export default FavoritePage;