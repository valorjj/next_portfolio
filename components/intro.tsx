/** @format */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Intro = () => {
	// Intro 안에 있는 내용들 처럼 연관되어 있는 경우
	// div 말고 section 태그 사용
	return (
		<section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src='/photo.jpeg'
							alt=''
							width={100}
							height={100}
							priority={true}
							quality={95}
							// object-cover: aspect-ration 보존
							// object-fill: 컨테이너 모두 채우도록 stretch
							// object-contain: 정해진 높이, 길이 안에서만 존재
							// object-scale-down: 높이가 너무 큰 경우 줄이기
							className='w-24 h-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
						/>
					</motion.div>
					<motion.span
						className='absolute bottom-0 right-0 text-4xl'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.6,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span>안녕하세요, 저는 김정진입니다.</span> 저는{' '}
				<span className='font-bold'>백엔드 개발자</span> 입니다.{' '}
				<span>
					아직 경력은 얼마 안된 신입이지만, 실력을 기르기 위해 열심히 노력하고
					있어요. 프론트엔드 프레임워크 기술을 익히기 위해{' '}
				</span>
				<span className='italic'>Nextjs</span> 를 사용해 포트폴리오 사이트를
				만드는 중입니다. 주 관심사는{' '}
				<span className='underline'>
					스프링부트 MySQL JPA MSA AWS Docker Kubernetes
				</span>{' '}
				입니다.
			</motion.h1>

			<motion.div
				className='flex flex-col sm:flex-row items-center 
				justify-center gap-2 px-4 text-lg font-medium'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
					focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
				>
					Contact me here
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>

				<a
					className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
					focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
					border-black/10'
					href='/CV.pdf'
					download
				>
					이력서{' '}
					<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
				</a>
				<a
					className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none 
				focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10'
					href='https://github.com/valorjj'
					target='_blank'
				>
					<BsGithub />
				</a>
				<a
					className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none 
				focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10'
					href='https://valorjj.github.io/'
					target='_blank'
				>
					<FaBlog />
				</a>
			</motion.div>
		</section>
	);
};

export default Intro;
