/** @format */
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const Contact = () => {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			ref={ref}
			id='contact'
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>
			{/* 
      	TODO: 섹션헤딩에 마진 값 props 으로 넘겨서 동적으로 리팩토링하기
      */}
			<p className='text-gray-700 -mt-6 dark:text-white/80'>
				제 이메일 주소는 <a className='underline'>valorjj@gmail.com</a> 입니다.
			</p>

			<form
				className='mt-10 flex flex-col dark:text-black'
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success('이메일이 성공적으로 전송되었습니다.');
				}}
				// action={sendEmail}
			>
				<input
					type='email'
					className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80
					dark:focus:bg-opacity-100 transition-all dark:outline-none'
					placeholder='Your email'
					required
					maxLength={500}
					name='senderEmail'
				/>
				<textarea
					className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80
					dark:focus:bg-opacity-100 transition-all dark:outline-none'
					placeholder='Your message'
					required
					maxLength={5000}
					name='message'
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
};

export default Contact;
