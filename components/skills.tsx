/** @format */
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
		rotate: 30,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.04 * index,
		},
		rotate: 0,
	}),
};

const Skills = () => {
	const { ref } = useSectionInView('Skills');

	return (
		// 전역적으로 사용되는 width, height 는 tailwindcss 에서는
		// 관리를 못 하나? 매번 새롭게 선언해줘야 하는건가?
		// 해결: @apply 로 가능
		<section
			id='skills'
			ref={ref}
			className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
		>
			<SectionHeading>My skills</SectionHeading>
			<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
				{skillsData.map((skill, index) => (
					<motion.li
						className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80
					hover:bg-slate-300
						hover:rotate-45
					dark:hover:bg-white/20'
						key={index}
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
