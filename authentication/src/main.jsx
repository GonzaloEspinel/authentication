/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/about/About.jsx";
import { Users, loader as usersLoader } from "./components/users/Users.jsx";
// import { User, loader as userLoader } from "./components/Users.jsx";
import { Quote } from "./components/quote/Quote.jsx";
import { CONTACT } from "./components/contact/Contact.jsx";
import { Root } from "./Root.jsx";
// import { Map } from './components/map/Map.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/contact",
        element: <CONTACT />,
      },
    ],
  },
  {
    path: "/users",
    element: <Users />,
    loader: usersLoader,
  },

  // {
  //   path: "user/:email",
  //   element: <User />
  //   loader: Loader,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
