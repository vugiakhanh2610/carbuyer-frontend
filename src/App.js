import { Route, Routes } from "react-router";
import Main from "./layouts/Main";
import BrandDetail from "./pages/BrandDetail";
import BrandPage from "./pages/BrandPage";
import CarDetail from "./pages/CarDetail";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/car/:id" element={<CarDetail></CarDetail>}></Route>
          <Route path="/brand/" element={<BrandPage></BrandPage>}></Route>
          <Route
            path="/brand/:id"
            element={<BrandDetail></BrandDetail>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
