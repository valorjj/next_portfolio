/** @format */

import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

import nextblog from '@/public/nextblog.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

// ts 에서 배열 선언 후, as const 붙여주기
export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: '한양대 ERICA 졸업(기계공학)',
		location: '경기도 안산',
		description:
			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '~ 2018.02',
	},
	{
		title: 'Java 국비교육 수료',
		location: '경기도 안산',
		description: 'Java, Spring 의 기본을 배운 6개월 교육과정 수료',
		icon: React.createElement(FaPencilAlt),
		date: '2021.09 ~ 2022.02',
	},
	{
		title: '(주)에이아이커넥트',
		location: '서울특별시 서초구 양재동',
		description: '고용노동부 실업급여 카카오톡 챗봇과 관리자 페이지 제작',
		icon: React.createElement(MdOutlineWork),
		date: '2022.03 ~ 2023.02',
	},
] as const;

export const projectsData = [
	{
		title: 'Next.js 블로그',
		description:
			'Next.js 13 과 몽고DB, 파이어베이스, 프리즈마를 이용한 간단한 블로그를 만들어봤습니다.',
		tags: ['Next.js', 'MongoDB', 'Prisma', 'Firebase'],
		imageUrl: nextblog,
		id: 1,
	},
	{
		title: '스프링 마이크로서비스 아키텍쳐',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
		id: 2,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
		id: 3,
	},
] as const;

export const skillsData = [
	'Spring Boot',
	'AWS',
	'Docker',
	'JPA',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'MySQL',
	'Framer Motion',
] as const;
