import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ChatHome from "../pages/ChatHome";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/chat" element={<ChatHome/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;