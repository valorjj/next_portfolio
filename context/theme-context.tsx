/** @format */
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as Theme | null;

		if (localTheme) {
			setTheme(localTheme);

			if (localTheme === 'dark') {
				document.documentElement.classList.add('dark');
			}
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
			if (localTheme === 'dark') {
				setTheme('dark');
				document.documentElement.classList.add('dark');
			}
		}
	}, []);
	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

/**
 * ThemeContext 를 consume 하는 컴포넌트에서
 * 호출해서 사용하기 위한 커스텀 훅
 * 전처리 하는거라고 생각
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	// null 값 체크
	if (context === null) {
		throw new Error(
			'useTheme 은 ThemeContextProvider 범위 내에서 사용되어야 합니다.'
		);
	}
	return context;
};
