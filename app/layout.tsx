/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './input.css';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jeongjin Kim | Portfolio',
	description: 'Jeongjin Kim`s portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
			>
				<div
					className='bg-[#fbe2e3 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] -z-10'
				></div>

				<div
					className='bg-[#dbd7fb absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg-left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'
				></div>
				<Header />
				{children}
			</body>
		</html>
	);
}
