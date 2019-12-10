# template-svelte

[![Build Status](https://travis-ci.com/metonym/template-svelte.svg?branch=master)](https://travis-ci.com/metonym/template-svelte)
[![codecov](https://img.shields.io/codecov/c/github/metonym/template-svelte.svg)](https://codecov.io/gh/metonym/template-svelte)

> Template for building [Svelte](https://github.com/sveltejs/svelte) libraries with Storybook and Rollup.

This template provides a set-up for developing, building and publishing Svelte component libraries.

## Workflow

- **Developing**: Storybook ([config](.storybook))
- **Testing**: [Jest](https://jestjs.io/) + [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library)
- **Formatting**: [Prettier](https://prettier.io/) + [prettier-plugin-svelte](https://github.com/UnwrittenFun/prettier-plugin-svelte)
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

### `yarn test`

Runs tests using [Jest](https://github.com/facebook/jest) with [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library) and generates a coverage report.

## Publishing to `npm`

### 1) Update the Library Name

Update the library name if you haven't already.

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

```json
// package.json
{
  "files": ["lib", "src"], // include the `src` folder for the `svelte` entry
  "repository": {
    "type": "git",
    "url": "https://github.com/<USER_NAME>/<REPO_NAME>.git"
  },
  "homepage": "https://github.com/<USER_NAME>/<REPO_NAME>"
}
```

### 3) Publishing

Build the library before publishing:

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

## License

[MIT](LICENSE)
