import { createContext } from 'react';
import React from 'react';
import { useState, useContext } from 'react';

export const AuthContext = createContext();

// export default AuthContext;

const initialState = {
	id: '',
	username: '',
	accsessToken: '',
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({ initialState });

	const login = (username, password, accsessToken) => {
		setUser({
			username,
			password,
			accsessToken,
		});
	};

	return (
		<AuthContext.Provider
			value={{ user, login, isAuthenticated: Boolean(user.username) }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const authState = useContext(AuthContext);
	return authState;
};

/*
     Context API:
          => Предаване на стейт между 2 отдалечени компонента без използване на prop drilling (подаването на стейта през "props" на по-горно ниво - родител).
     По този начин стейта не се предава на компоненти, които не се нужадят от него.
          Използва се за:
               1. Текущо логнатият потребител
               2. Смяна на Theme на апп-а (тапет)
               3. Динамична смяна на езика на апп-а
               4. Данни, които се трябва да се достъпят от компоненти на различно ниво в дървото, без иползване на посреник компонент

     Гобално:
          (стейт) contextData => Данните, които пазим в контекст провайдъра и искаме да подаваме между компонентите

               <AuthContext.Provider value={contextData}>
                    Компонентите, които ще достъпят "contextData"
               </AuthContext.Provider>

     Локално (В компонента, който ще използва контекста):
          1. Импортваме контекста
               => import AuthContext from '../contexts/authContext'; -> файла на контекста, в който е създаден контекста.
          2. Импортваме useContext Хуук-а
               => import { useContext } from 'react';
          3. Декларираме на топ левел стойността от контекста
               const value = useContext(AuthContext);
*/
