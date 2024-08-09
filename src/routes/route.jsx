import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChatPage from "../pages/ChatePage/ChatPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/chats",
      element: <ChatPage/>,
    },
  ]);


  export default router