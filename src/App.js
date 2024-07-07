import { Router,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Events from "./pages/Events";
import News from "./pages/News";
import Settings from "./pages/Settings";
import Signin from "./components/Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />)
  },
  {
    path: "/signin",
    element: (<Signin />)
  },
  {
    path: "/dashboard",
    element: (<Dashboard />)
  },
  {
    path: "/events",
    element: (<Events />)
  },
  
  {
    path: "/news",
    element: (<News />)
  },
  {
    path: "/settings",
    element: (<Settings />)
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;
