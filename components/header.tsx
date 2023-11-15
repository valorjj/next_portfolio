/** @format */
// framer motion 이 useEffect 을 사용한다.
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-session-context';

const Header = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();
	return (
		<header className='z-[999] relative'>
			<motion.div
				className='fixed top-0 left-1/2 h-[4.5rem] w-full
      rounded-none border border-white border-opacity-40
      bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
				dark:bg-gray-950
				dark:border-black/40
				dark:bg-opacity-70
			'
				// framer motion 설정 값이 tailwindcss 로 부여한 값을 덮어쓴다.
				// CSS 의 transform 값을 부여
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			></motion.div>
			{/* w-[initial], h-[initial]: 재설정 */}
			<nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
				<ul
					className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem]
        font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5
				'
				>
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className='h-3/4 flex items-center justify-center relative'
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								// clsx 를 사용해서 스타일 적용 시, 조건을 부여할 수 있다.
								className={clsx(
									'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-200',
									{
										'text-gray-950 dark:text-gray-200':
											activeSection === link.name,
									}
								)}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}

								{/* inset-0: 모든 방향을 0 으로 지정 */}
								{link.name === activeSection && (
									<motion.span
										className='
										bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-800
										'
										// layoutId 를 부여해 목적지를 정한다.
										layoutId='activeSession'
										// 애니메이션 설정
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
