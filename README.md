# Toasted by Friend Of Svelte

Fast and easy toast and flash messages for svelte.

## Installation

```bash
npm install @friendofsvelte/toasted
```

## Usage

Here's how you can set your toast/flash messages. Usually from `+page.server.ts` or `+server.ts` file.

```typescript
import type { RequestHandler } from './$types';
import { flash_redirect } from '@friendofsvelte/toasted';

export const GET: RequestHandler = async ({ cookies }) => {
	throw flash_redirect(
		cookies,
		{
			messages: [ 'This is just a simple toast message.', 'This is just another simple toast message'], // or message: 'This is just a simple toast message.'
			message_type: 'success',
			alias: 'already_confirmed'
		},
		302,
		'/_dev'
	);
};
```

And here's how you can display them in your svelte component.

```svelte
<script lang="ts">
    import Toasted from '@friendofsvelte/toasted/Toasted.svelte';
    import '@friendofsvelte/toasted/toasted.css';
    import "iconify-icon";
</script>

<Toasted/>
```

## Manual addition or removal of messages

```typescript
import { addToast, dismissAllToasts, dismissToast, triggerMessage, setFlashMessage } from '@friendofsvelte/toasted';

addToast({
	message: 'Init message',
	message_type: 'error',
	alias: 'init',
}, 2000);
```

- `addToast` adds a toast message to the list of messages to be displayed. It
  accepts `message`, `message_type`, `messages`, `alias` and `action_path` as parameters (MessageOut).
  `message` is the message to be displayed. `message_type` is the type of the message. `messages` is an array of
  messages to be displayed. `alias` is the alias of the message. `action_path` is the path to be redirected to when the
  user clicks on the button in the toast message.
- `dismissAllToasts` removes all messages from the list of messages to be displayed.
- `dismissToast` removes a specific message from the list of messages to be displayed. Accepts toast id as parameter.
- `triggerMessage` seeks message data from the server and adds it to the list of messages to be displayed.
- `setFlashMessage` gets the message data from the server (cookie) and adds it to the list of messages to be displayed.

## Message types

- `success`
- `info`
- `warning`
- `error`

## Message aliases

Message aliases are used to identify messages, and use them for some specific message detection purposes.

## Components import

```typescript
import Toasted from '@friendofsvelte/toasted/Toasted.svelte';
import Toast from '@friendofsvelte/toasted/Toast.svelte'; // Sigle toast message
import InitToasts from '@friendofsvelte/toasted/InitToasts.svelte'; // Initial toast messages
```

`InitToasts` is used to display initial toast messages stored in the cookie, or as fallback messages.

## About Friend Of Svelte

![Friend Of Svelte Logo](https://avatars.githubusercontent.com/u/143795012?s=200&v=4)

[Friend Of Svelte](https://github.com/friendofsvelte) is a community driven project to help Svelte developers to find
and
develop awesome Svelte resources.

If you like this project, you can be one of the friend by contributing to the project. Memberships are open for
everyone.