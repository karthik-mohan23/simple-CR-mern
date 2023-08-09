import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
