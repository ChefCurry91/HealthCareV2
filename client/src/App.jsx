import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {  Landing,
          HomeLayout,
          Error,
          Register,
          Login,
          Staff
                } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path:'register',
        element: <Register/>,
      },
      {
        path:'login',
        element: <Login />,
      },
      {
        path:'staff',
        element: <Staff />,
      },
      {
        path:'contact',
        element: <Login />,
      },


    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;