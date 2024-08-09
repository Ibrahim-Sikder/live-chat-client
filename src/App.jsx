import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chatpage from "./pages/ChatePage/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chatpage />} />
    </Routes>
  );
}

export default App;
