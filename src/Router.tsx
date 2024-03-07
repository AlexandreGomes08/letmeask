import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newroom" element={<NewRoom />} />
    </Routes>
  );
}