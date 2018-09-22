# Starter React

## Table of Contents
- [Installation and Setup](#installation-and-setup)
- [Tools / Libraries](#tools--libraries)
- [Guide](#guide)
  - [Project structure](#project-structure)
- [Testing](#testing)
- [Misc](#misc)

## Installation and Setup
Ensure: that your versions of node and npm are up to date by running:
```bash
$  node -v; npm -v;
v10.4.0
6.1.0
```

Clone this repository on your local machine
```zsh
$  git clone https://github.com/bitadj/starter-react.git
$  npm i
$  npm start
```

The app will automatically open your browser to http://localhost:8484/

### Dependencies
We recommend that you download a linter for your code editor for use with eslint

Starter React utilizes the following tools/libraries (As of September 21, 2018):
- [React 16](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Axios](https://github.com/axios/axios#axios)
- [Babel 7](https://babeljs.io/docs/en/)
- [Webpack 4](https://webpack.js.org/concepts/)
- [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- [Eslint](https://eslint.org/docs/rules/)
- [Sass](https://sass-lang.com/guide)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Lodash](https://lodash.com/docs) (as [lodash-es](https://github.com/lodash/lodash/tree/es))

## Guide
### Project Structure - Components
- Each feature is located within its own folder (named using `PascalCase`) under the `src/` directory and contains an `index.jsx` at the top level

- A feature may be comprised of multiple components, in which case there will be a `components` folder within the feature directory with a `jsx` file for each component and may have an `index.js` file for named exports

- If a feature utilizes redux, there are folders for `actions` and `reducers`

- Test files have the same filename (using `PascalCase`) as the components/util being tested with the `.test.js` extension (i.e. `MyComponent.test.js`) and are located in the same directory as the component/util

- Utility and helper functions are located in a `utils` folder with an `index.js` for exports

### Project Structure - Stylesheets
- Within ghe `src/` directory there is also a `stylesheets` directory.

- The stylesheets for each component are located within their own directory under the `stylesheets/modules` directory.

- Each stylesheet has the same filename (using `snake-case`) as the associated component and is prefixed with an underscore (i.e. `_my-component.scss`)

- Each new module is imported in `main.scss` (i.e. `@import "modules/Cases/cases.scss";`)

#### Sample Component Structure
```
.
src/
  Cases/
    actions/
      fetchCases.js
      fetchCases.test.js
    components/
      CasesItem.jsx
      CasesItem.test.js
    reducers/
      casesReducer.js
      casesReducer.test.js
    utils/
      formatCaseData.js
      formatCaseData.test.js
      selectCase.test.js
      selectCase.js
      index.js
    index.jsx
    index.test.js
  AnotherComponent/
  stylesheets/
    modules/
      App/
      Cases/
        _cases.scss
      AnotherComponent/
        _another-component.scss
    _variables.scss
    main.scss
```
### Importing Components
Starter React takes advantage of [`@babel/plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver#babel-plugin-module-resolver) for absolute `import` statements.

## Testing
The testing environment is written in Jest and Enzyme. Please ensure your components and utilities are thoroughly tested by running a test coverage report. Test files have the same name as the components/util being tested with the `.test.js` extension and are located in the same directory as the component/util.

### Running tests
There are a number of options for running tests:

|Script                   |Result                   |
|:------------------------|:------------------------|
| `npm run test`          | run all tests once      |
| `npm run test:watch`    | run tests in watch mode |
| `npm run test:coverage` | creates a coverage report in `./coverage` directory <br> opens coverage report in browser |

## Misc
To see a treemap of the production bundle, run `npm run analyze`
