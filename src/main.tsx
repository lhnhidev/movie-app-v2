import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Movie from "./pages/Movie"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
