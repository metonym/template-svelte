# template-svelte

[![Build Status](https://travis-ci.com/metonym/template-svelte.svg?branch=master)](https://travis-ci.com/metonym/template-svelte)
[![codecov](https://img.shields.io/codecov/c/github/metonym/template-svelte.svg)](https://codecov.io/gh/metonym/template-svelte)

> Template for building [Svelte](https://github.com/sveltejs/svelte) libraries with Storybook and Rollup.

## Workflow

- **Development & Documentation**: Storybook ([config](.storybook))
- **Unit Testing**: [Jest](https://jestjs.io/) + [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library)
- **Code Formatting**: [Prettier](https://prettier.io/) + [prettier-plugin-svelte](https://github.com/UnwrittenFun/prettier-plugin-svelte)
- **Linting**: [ESLint](https://eslint.org/) + [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3)
- **Continuous Integration**: Travis CI ([config](.travis.yml))
- **Building**: Rollup ([config](rollup.config.js))

## Getting Started

Clone the repository:

```bash
git clone git@github.com:metonym/template-svelte.git
cd template-svelte
```

Install its dependencies:

```bash
yarn install
```

## Available Scripts

### `yarn start`

Runs the storybook locally in development mode. Visit `http://localhost:9000`.

### `yarn build`

Builds the library for production using [Rollup](https://github.com/rollup/rollup) and outputs artifacts to the `lib` folder.

#### Build Formats

```js
// package.json
{
  "svelte": "src/index.js", // preferred Svelte entry
  "main": "lib/index.js", // UMD build
  "module": "lib/index.mjs" // ES Module build
}
```

### `yarn build:docs`

Builds the Storybook for production and outputs files to the `docs` folder. This template uses [GitHub pages](https://pages.github.com/) for hosting the Storybook.

### `yarn test`

Runs tests using [Jest](https://github.com/facebook/jest) with [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library) and generates a coverage report.

## Publishing to `npm`

### 1) Update the Library Name

Update the library name in [package.json](package.json) and [rollup.config.js](rollup.config.js).

```diff
{
- "name": "template-svelte",
+ "name": "<YOUR_LIBRARY_NAME>"
}
```

```diff
// rollup.config.js
if (UMD) {
- output.name = 'template-svelte';
+ output.name = '<YOUR_LIBRARY_NAME>';
}
```

### 2) Add Publishing Metadata

```js
// package.json
{
  "files": ["lib", "src"], // `src` must be included for the `svelte` entry
  "repository": {
    "type": "git",
    "url": "https://github.com/<USER_NAME>/<REPO_NAME>.git"
  },
  "homepage": "https://github.com/<USER_NAME>/<REPO_NAME>"
}
```

### 3) Publishing

**Important**: Build the library in the UMD, ES formats before publishing:

```sh
yarn build
```

Publish the package to `npm`.

```sh
yarn publish
```

**Recommendation**: Add the `prepublishOnly` command to [package.json](package.json) to automatically run the build script before publishing the package.

```diff
// package.json
{
  "scripts": {
    "start": "start-storybook -p 9000",
    "build": "rollup -c",
    "build:docs": "build-storybook -o docs",
    "test": "jest --coverage",
+   "prepublishOnly": "yarn build"
  }
}
```

## Recommended Set-up

### VSCode

#### 1) Install Extensions

Install the following extensions for Svelte syntax highlighting, intellisense and auto-formatting.

- **Svelte**: (`jamesbirtles.svelte-vscode`) [github](https://github.com/UnwrittenFun/svelte-vscode)
- **Prettier - Code formatter**: (`esbenp.prettier-vscode`) [github](https://github.com/prettier/prettier-vscode)

#### 2) Configure Settings

Open your VSCode `settings.json`.

You must explicitly specify the `editor.defaultFormatter` for `.svelte` files. Otherwise, VSCode will attempt to use the Prettier default formatter, which may not be able to parse `.svelte` files.

```js
// settings.json
{
  // ...other VSCode settings
  "editor.formatOnSave": true, // auto-formats files using the Prettier extension
  "files.associations": {
    "*.html": "html",
    "*.svelte": "svelte" // enable syntax highlighting using the Svelte extension
  },
  "[svelte]": {
    "editor.defaultFormatter": "JamesBirtles.svelte-vscode"
  }
}
```

## License

[MIT](LICENSE)
