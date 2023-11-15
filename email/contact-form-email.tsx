/** @format */

import React from 'react';
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
	Button,
	Img,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export const ContactFormEmail = ({
	message,
	senderEmail,
}: ContactFormEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>포트폴리오 사이트에서 이메일이 전송되었습니다.</Preview>
			<Tailwind>
				<Body className='bg-gray-100 text-black'>
					<Container>
						<Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
							{/* leading-tight: 글자가 커지면, 헤더에 line-height 을 줄인다. */}
							<Heading className='leading-tight'>
								포트폴리오 사이트로부터 누군가 이메일을 전송했습니다.
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>전송된 이메일은 {senderEmail} 입니다.</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmail;
