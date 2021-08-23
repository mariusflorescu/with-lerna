# with-lerna example
An example of a split project into separate packages, useful for code sharing, using [Lerna](https://github.com/lerna/lerna).  
**[See live example](https://with-lerna.vercel.app/)** 

## General information:
- it uses lerna  and [yarn](https://www.npmjs.com/package/yarn) as npm client.
- it has 2 packages: the web app ([Next.js](https://nextjs.org/)) and an ui-lib, both using TypeScript (in the `packages` folder).
- the modules from the ui-lib are being transpiled into the Next.js app with [next-transpiled-modules](https://www.npmjs.com/package/next-transpile-modules).

### Requirements:
- to have yarn installed. (`npm install -g yarn`)
- to have lerna installed. (`npm install -g lerna`)

### How to run:
- clone the repository
- `lerna bootstrap`
- `yarn start:app`
- good to go 🤪

## DEPLOYMENT INFORMATION ON VERCEL !!!
When you are creating the project, at the **Configure Project** select:
- Framework preset: `Next.js`
- Root Directory: `./packages/web-app`