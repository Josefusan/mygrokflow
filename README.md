# MyGrokFlow

Marketing site for mygrokflow.com.

MyGrokFlow designs and ships high-ticket AI automations: systems that replace expensive manual work for founders, software engineers, and high-earning operators.

Promise: We take a painful recurring workflow and turn it into a system that runs without you.

This is a static Next.js App Router landing page. No auth, no database, no CMS. The primary CTA opens mail to clarktechventures@gmail.com with subject MyGrokFlow diagnostic.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS v4
- shadcn/ui

## How to run

From the project root, install dependencies with npm, then use the `dev` script in package.json. The app is at http://localhost:3000.

For a production compile, use the `build` script, then `start`.

If `package-lock.json` is missing, npm install will write one.

## How to deploy on Vercel

1. Import the GitHub repository Josefusan/mygrokflow.
2. Keep the Next.js framework preset and default build command.
3. No environment variables are required.
4. Attach mygrokflow.com when DNS is ready.

Single route: `/`. Dark by default.
