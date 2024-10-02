# rcmndr

collate.
recommend.
discover.

## what is rcmndr?

rcmndr (no vowels for hipster cred) is a social media app for sharing music recommendations, either as genuine suggestions or as proof of how cool you are.

## External documentation

- [Wireframes on Figma](https://www.figma.com/design/fXvKsggZsvUrUVvvL6cV8z/rcmndr-2024?node-id=0-1)

- [ERD Diagram](./docs/ERD.png)

- [Ticket Dependency Flowchart](https://miro.com/app/board/uXjVMUYcUjM=/)

## Local installation steps:

Clone this repo

```js
cd rcmndr
git checkout <not your name> // don't use yournames
npm install
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env # <==== IMPORTANT
npm run dev
```

Ask one of the facilitators to share the values for the `.env` file on discord before running the app.

The app will be running on http://localhost:5173.

## Tech used in this Project

- Storybook: is a tool for UI development: [video introduction](https://www.youtube.com/watch?v=gdlTFPebzAU), [docs](https://storybook.js.org/docs/react/get-started/introduction)
- Vite: a fast bundler: [video introduction](https://www.youtube.com/watch?v=KCrXgy8qtjM), [docs](https://vitejs.dev/guide/)
- tailwindcss: utility classes for styling: [video introduction](https://www.google.com/search?q=tailwind&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjj68-pgMP7AhV21jgGHWukCe0Q_AUoBHoECAEQBg&biw=1440&bih=789&dpr=2#fpstate=ive&vld=cid:0d59cd2c,vid:mr15Xzb1Ook), [docs](https://tailwindcss.com/docs/installation)
- Auth0: for authenticating users
- zod: for runtime validation
- @tanstack/query: async client state management library

## Testing Strategy

### Unit/Integration tests

To test an individual test, use **npx**:

```
npx vitest events.test.js
```

To run all tests:

```
npm run test
```

To run one single test, add `.only` after `it`

```
it.only('my test name goes here', () => {
  // here test goes here
))

```

Then you can run the test file individually, `npm test events.test.js`.

## Github Contributions:

Read this file for indepth git-flow: [CONTRIBUTION](./docs/CONTRIBUTION.md)

## Choosing a ticket / issue

We distribute our tickets via Github issues. To make sure this works well in a big team we want you to keep the following workflow in mind:

- When choosing a ticket - make sure you assign yourself/selves to the issue. This tells other devs that the issue is being done.
- When submitting a Pull Request, and your waiting for a Code Review, choose another ticket to work on (one that doesn't depend on other tickets being completed first)
- When you get a Code Review about a previous ticket, stop working on your current one, and focus on the earlier tickets first.

## Branching strategy

### main branch

The ONLY branch that should be merged to is the `main` (once all tests have passed). This branch is what will be deployed to production. If you spot a bug in production sing out to a dev lead. They'll sort you out. We've protected this branch so in theory only the dev leads can push / merge to it.

### feature branches

When starting on a new feature you need to branch off of the `main` branch

Features should be named something like `f/123-adding-songs`. The first half (f) let's folks know what kind of branch this is. A feature branch is in development and is not ready for deployment yet. The second half is a descriptive name of the feature you are building.

### hotfix

A hotfix branch will happen if a bug is spotted in production. Only dev leads should create a hotfix branch. See them for more info. They follow the same naming convention as feature branches, something like `hotfix/usersCantLogIn`

## Asking for help

Supporting a team of more than 4 developers can challenging for any dev lead and the best thing you can do as a junior when you ask for help is to ask good questions. Here are a few things to consider when asking for support:

- What ticket are you working on?
- Are you having a problem or do you have a clarification question?
- If you're getting an error, show us the error and how can you reproduce it
