# Portfolio_v2

### Overview

Portfolio_v2 is my personal portfolio built with Vite for faster development and built with components from Material UI. The portfolio is divided into four different sections that can be easily reached via the navbar. Also featured in the navbar is the translations icon where you can pick out a language to use that uses React-INTL under the hood.

Live: https://owenmy.github.io/

### Technologies

![MUI](https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## Getting Started

### Local server for development with hot module reload

1. Clone the repo locally.

2. Install the dependencies.

```bash
npm install
```

3. Run the dev server.

```bash
npm run dev
```

4. Visit the local webpage at http://localhost:5173/

<br>

### Test hot module reload

You can automatically run tests while saving your documents using jests hot test watcher.

```bash
npm run test:watch
```

<br>

### Language extraction

To extract the new text added during development for translation, run:

```bash
npm run lang:extract
```

Take the new commited lines of english translations and take it to ChatGPT for translating. Although it is tedious, there is a script in the road map to be created for automating this process and automatically updating the langugage files.

<br>

### Before pushing changes

Run the release command to make sure that the linter, prettier, all tests pass and the production build command are all successful to ensure confidence in code.

```bash
npm run release
```

<br>

### Manual Deployment

> **IMPORTANT**
> Github actions automatically deploys the code to production once the changes reach the end of the pipeline. Only use this command if the pipeline is broken and changes must be pushed.

```bash
npm run deploy
```

<br>
