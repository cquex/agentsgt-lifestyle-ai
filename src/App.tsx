// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Pallete from "pages/Palette";
import Chat from "pages/Chat";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/palette" element={<Pallete />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
