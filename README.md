# Theme Toggle With Reejs

This repo demonstrates how to use [Reejs](https://ree.js.org) to create a theme toggle with SSR support (with the help of cookies).

Since Reejs exports the `Hono context` to components during ssr, we can use it to access the cookies and set the theme accordingly.
On browser side, we can use the `useEffect` hook to set the theme based on the cookie value.

## Preqrequisites

- Reejs latest version successfully installed and working.

## Usage

- Clone this repo
- Run `reejs i && reejs sync && npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `localhost:3000` in your browser

> If you like this repo, please consider giving it a star ⭐ on [reejs](https://github.com/rovelstars/reejs) framework itself to show your support 💪