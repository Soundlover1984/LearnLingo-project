import { AppStyled } from "./App.styled";
import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "routes/PrivateRoute";


const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const CardsPage = lazy(() => import("pages/CardsPage/CardsPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage/FavoritesPage"));

function App() {

  return (
    <>
      <AppStyled>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="teachers" element={<CardsPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
              }
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </AppStyled>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#363636",
          },
        }}
      />
    </>
  );
}

export default App;