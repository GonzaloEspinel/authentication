/* eslint-disable react/prop-types */
import { AuthContext } from ".auth-context";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({
	children,
	reload = false,
	to = "/auth/login",
}) {
	const { currentUser } = useContext(AuthContext);
	const location = useLocation();

	if (!currentUser && reload) {
		return children;
	}

	if (!currentUser) {
		return (
			<Navigate
				to={`${to}?redirect=${location.pathname}`}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}

export default RequireAuth;