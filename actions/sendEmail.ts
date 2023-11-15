/** @format */
'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';
import { renderAsync } from '@react-email/render';

/**
 * Resend 라이브러리 사용
 *
 */

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('senderEmail');
	const message = formData.get('message');

	// 간단한 유효성 검사
	if (!validateString(senderEmail, 500)) {
		return {
			error: '유효하지 않은 이메일입니다.',
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: '유효하지 않은 메시지입니다.',
		};
	}

	try {
		const { data, error } = await resend.emails.send({
			// <onboarding@resend.dev> 은 고정값
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'valorjj@gmail.com',
			subject: '포트폴리오 사이트에서 누군가 이메일을 보냈습니다.',
			// 확실하게 타입체크를 했기 때문에 as string 사용
			reply_to: senderEmail as string,
			text: message as string,
			// react: React.createElement(ContactFormEmail, {
			// 	message: message as string,
			// 	senderEmail: senderEmail as string,
			// }),
		});

		return {
			data,
		};
	} catch (error: unknown) {
		// 써드파티 라이브러리이기 때문에
		// 어떤 에러 객체를 전달할 지 모른다!
		// 모든 경우를 대비해 유효성 검사가 필요하다.
		return {
			error: getErrorMessage(error),
		};
	}
};
