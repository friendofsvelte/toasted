export type MessageType = 'success' | 'error' | 'warning' | 'info';

type MessageOutCommon = {
	message_type?: MessageType
	alias: string;
	action_path?: string;
};

type MessageSingle = MessageOutCommon & {
	message: string;
	messages?: never;
};

type MessageMultiple = MessageOutCommon & {
	message?: never;
	messages: string[];
};

export type MessageOut = MessageSingle | MessageMultiple;

export type FlashMessage = {
	path: string;
} & MessageOut;

export type ToastNotification = {
	duration: number;
	id: string;
	message_type: MessageType;
} & MessageOut;

export type Inline = {
	inline: Record<string, string | string[]>;
}

export type ValidationError = {
	type: string;
	loc: ['body', 'data', ...string[]];
	msg: string;
	ctx?: Record<string, string>;
};

export type DetailedValidationError = {
	detail: ValidationError[];
}

export type FallbackMessage = { message: string; message_type: MessageType; duration: number; };
export type Fallback = false | FallbackMessage;