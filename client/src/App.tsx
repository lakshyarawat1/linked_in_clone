import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
