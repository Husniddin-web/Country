import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Navbar, Country } from "./components/index";
import Info from "./pages/Info";
import { ModeContext } from "./context/Mode";
function App() {
  const { mode, setMode } = useContext(ModeContext);
  useEffect(() => {
    document.body.className = mode ? "" : "dark";
  }, [mode]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:names" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
