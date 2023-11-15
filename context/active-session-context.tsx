/** @format */
'use client';

import { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSessionContextProviderProps = {
	children: React.ReactNode;
};

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSessionContext =
	createContext<ActiveSectionContextType | null>(null);

const ActiveSessionContextProvider = ({
	children,
}: ActiveSessionContextProviderProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	/*
	사용자가 link 를 클릭해서 이동한 경우, observer 를 비활성화 하기 위해서 
	사용자가 클릭한 시간을 상태값으로 관리한다.
	*/
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSessionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSessionContext.Provider>
	);
};

/**
 * null 값을 필터링 한 후, 컨텍스트 전달하는 훅 생성
 * @returns
 */
export const useActiveSectionContext = () => {
	const context = useContext(ActiveSessionContext);

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within a ActiveSectionContextProvider'
		);
	}

	return context;
};

export default ActiveSessionContextProvider;
