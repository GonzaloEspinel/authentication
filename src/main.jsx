import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrivateRoot } from './PrivateRoot.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './lib/context/auth-context.jsx';
import RequireAuth from './lib/require-auth.jsx';

// eslint-disable-next-line no-unused-vars
const withAuthProvider = (Component, requireAuth = false,) => {
	return (
		<AuthProvider>
			{requireAuth ? (
				<RequireAuth>
					<Component />
				</RequireAuth>
			) : (
				<Component />
			)}
		</AuthProvider>
	);
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/private",
    element: <PrivateRoot />, 
    // to make it private
    // element: withAuthProvider(PrivateApp,true),
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);