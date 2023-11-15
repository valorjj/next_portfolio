/** @format */
'use client';

import React, { useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

const ThemeSwitch = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<motion.button
			className='
			fixed bottom-5 
			right-5
		bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
			border border-white border-opacity-40
			shdaow-2xl rounded-full
			flexCenter
			hover:scale-[1.15]
			active:scale-105
			transition-all 
			dark:bg-gray-950
		'
			onClick={toggleTheme}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
		>
			{theme === 'light' ? <BsSun /> : <BsMoon />}
		</motion.button>
	);
};

export default ThemeSwitch;
