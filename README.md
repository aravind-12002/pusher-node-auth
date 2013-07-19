# An authentication endpoint for Pusher using Node.js

This endpoint **does not** actually do any authentication against an auth system. It simply allows the auth request e.g. authenticates a `private-` or `presence-` subscription.

**Please** ensure that if you use this in production you do some real authentication against the request.

## Getting Started

This app was built to be run via `foreman`.

### Procfile

This example comes with a `Procfile`.

### Environment Variables via `.env`

You need to add some environmental variables to get it running using `foreman`

    PUSHER_APP_ID=<APP_ID>
		PUSHER_APP_KEY=<APP_KEY>
		PUSHER_APP_SECRET=<SECRET>
		PORT=<PORT>
		ALLOWED_HOST=*

To run on Heroku you'll need to add these variables via `heroku config:add <NAME>=<VALUE>`.