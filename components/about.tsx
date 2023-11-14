/** @format */
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.section
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				<span className='font-bold'>기계공학</span>을 전공했지만, 프로그래밍에
				매력을 느껴 열심히 배우고 있는 주니어 개발자입니다. 국비교육으로 시작해
				부족한 지식, 경험을 채우기 위해 매일 정진하고 있습니다.
			</p>
			<p></p>
		</motion.section>
	);
};

export default About;
