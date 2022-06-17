import { Route, Routes } from "react-router";
import Main from "./layouts/Main";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
