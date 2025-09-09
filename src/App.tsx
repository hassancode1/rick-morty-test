import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import CharacterPage from "./pages/character-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character-page" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
