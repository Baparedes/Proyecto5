import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AnimalDescription from "./pages/AnimalDescription";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/animales/:nombre", element: < AnimalDescription/> },
      { path: "*", element: <NotFound /> }
    ]
  }
])