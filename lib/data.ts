/** @format */

import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

import nextblog from '@/public/nextblog.png';
import msa2 from '@/public/msa_2.png';
import oauth2 from '@/public/oauth2.png';
import chat from '@/public/chat.png';

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
		title: '스프링 마이크로서비스 아키텍쳐',
		description: 'GKE, Jenkins, Github 을 연동한 CI/CD 과정을 구현',
		tags: [
			'Spring Boot',
			'Docker',
			'Kubernetes',
			'GCP',
			'Jenkins',
			'Zipkin',
			'Grafana',
			'MySQL',
		],
		imageUrl: msa2,
		id: 1,
		giturl: 'https://valorjj.github.io/posts/msa__01/',
	},
	{
		title: 'OAuth 2.0',
		description: '스프링 시큐리티, OAuth 2.0, JWT 전반에 대한 학습',
		tags: ['Spring Boot', 'OAuth 2.0', 'Spring Security', 'JWT'],
		imageUrl: oauth2,
		id: 2,
		giturl: 'https://github.com/valorjj/jwt-backend',
	},
	{
		title: 'Next.js 블로그',
		description: 'Next.js, MongoDB, Firebase, Prisma 로 만든 블로그',
		tags: ['Next.js', 'MongoDB', 'Prisma', 'Firebase'],
		imageUrl: nextblog,
		id: 3,
		giturl: 'https://github.com/valorjj/nextjs_blog',
	},
	{
		title: 'WebSocket 을 이용한 채팅',
		description: 'WebSocket, Stomp 사용한 실시간 채팅',
		tags: ['Spring Boot', 'WebSocket', 'STOMP', 'Thymeleaf'],
		imageUrl: chat,
		id: 4,
		giturl: 'https://github.com/valorjj/websocket-chat-demo',
	},
] as const;

export const skillsData = [
	'Spring Boot',
	'Thymeleaf',
	'AWS',
	'Docker',
	'Jenkins',
	'Eureka',
	'Spring Security',
	'JWT',
	'Google Cloud Platform',
	'Kubernetes',
	'Keycloak',
	'MySQL',
	'JPA',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React.js',
	'Next.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'MySQL',
	'Framer Motion',
] as const;
