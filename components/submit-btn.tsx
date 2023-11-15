/** @format */
'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitBtn = () => {
	// Next.js 13 에서 제공하는 Form 관련 API, 현재 에러 발생
	// https://www.youtube.com/watch?v=dDpZfOQBMaU&ab_channel=LeeRobinson
	// const { pending } = useFormStatus();
	const pending = false;

	return (
		<button
			type='submit'
			className='
            group 
            flexCenter h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none
            transition-all 
            focus:scale-110 
            hover:scale-110
            hover:bg-gray-950
            active:scale-105
            disabled:scale-100
            disabled:bg-opacity-65
						dark:bg-white 
						dark:bg-opacity-10
          '
			// aria-disabled={pending}
		>
			{pending ? (
				<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white '></div>
			) : (
				<>
					Submit{' '}
					<FaPaperPlane
						className='
              text-xs
              opacity-70
              transition-all
              group-hover:translate-x-1
              group-hover:-translate-y-1

            '
					/>
				</>
			)}
		</button>
	);
};

export default SubmitBtn;
