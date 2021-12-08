import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';

export const isAuth = (Component) => {
	const WrapperComponent = (props) => {
		const { isAuthenticated } = useAuthContext();

		if (!isAuthenticated()) {
			return <Navigate to="/login" />;
		}

		return <Component {...props} />;
	};

	return WrapperComponent;
};
