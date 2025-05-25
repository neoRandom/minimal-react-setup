# Minimal Setup Guide

> Note: I recommend using Linux and Visual Studio Code

## Starting

- Run `npm install` to install the project dependencies

- Run `npm run dev` to check if everything is alright

## Informations

- Edit `package.json` -> `"name": "..."` to your project's name

- Remove or replace `LICENSE`

- Remove or replace `README.md`

## Project Configuration

- Edit `index.html` as you need (e.g.: language, metadata, title, icon etc)

- Edit `.prettierrc` to combine with your code style (e.g.: tab width, single or double quotes)

- Edit your importing aliases at `tsconfig.app.json` -> `"paths": { ... }`

- Install and configure any adicional module (UI Kit, Global State Manager, HTTP Client, Requisitions Manager etc)

### If you will use Supabase (recommended)

- Clone `.env.example` to `.env.local` and edit with your Supabase Environment Variables (starting with `VITE_`)

- Make sure that your Supabase have the required RLS Rules

### if you will NOT use Supabase

- Remove the Supabase module with `npm uninstall @supabase/supabase-js`

- Remove the file `./src/utils/supabase.js` and the folder `./src/auth/`

## App Configuration

- Plan to have some server-side authentication check (dedicated Back-end or Vite w/ Server Functions)

- Edit `./src/app/AppRouter.tsx` to combine with your routes

- Edit `./src/app/index.css` -> `@theme { ... }` to combine with your project's theme

### If you will use Supabase (recommended)

- Use the folder `./src/auth` as a boilerplace for your authentication system and improve it as you like

## Development

- Do whatever you want, but make sure to have fun

- Check if is everything alright with `npm run check` (`npm run typecheck`, `npm run format` and `npm run lint`)

## Deploy

- Build the project using `npm run build`

- Remove `vercel.json` if you are not deploying to Vercel

- And, finally, remove `GUIDE.md`

Good Luck :D
