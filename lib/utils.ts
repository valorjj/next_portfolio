/** @format */

export const validateString = (value: unknown, maxLength: number) => {
	// null, file 타입 인 경우 유효성 체크
	if (!value || typeof value !== 'string' || value.length > maxLength) {
		return false;
	}

	return true;
};

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (
		error instanceof Error ||
		(error && typeof error === 'object' && 'message' in error)
	) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else {
		message = '알 수 없는 이유로 에러가 발생했습니다.';
	}

	return message;
};
