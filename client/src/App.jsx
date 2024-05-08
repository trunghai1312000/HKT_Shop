import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import NavBar from "./components/nav/Navbar";
import Home from "./components/pages/Home/Home";

function App() {
  const SpaceLayout = () => {
    return (
      <div className="">
        <div className="w-full h-full">
          <NavBar />
        </div>
        <div className="h-full w-full pt-[60px]">
          <Outlet />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <SpaceLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
