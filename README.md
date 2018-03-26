## Boilerplate React Redux v16 Starter

A simple but feature rich starter boilerplate. Its build using awesome features like Redux, React Router v4, Node.js/Express for SSR. All the hot cool stuff for development such as Webpack 3, Babel, PostCSS, React Hot Loader 4, Jest, Flow, ESLint, Prettier and Redux Devtools Extension.

This project was built with Create React App, which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of language features and polyfills supported by Create-React-App for more information.

## Install & Start

You need to be running [the latest node LTS](https://nodejs.org/en/download/) or newer

```bash
git clone https://github.com/proartti/boilerplate-react-redux.git
cd boilerplate-react-redux

npm install    # install packages
npm start      # start server
```

or

```bash
yarn          # install packages
yarn start    # start server
```

## Run Unit Tests

```bash
npm test          # run unit tests
```

## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platform. All of the scripts are listed as following:

| `yarn <script>`    | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `start`            | Run your app on the development server at `localhost:3000`. HMR will be enabled.           |
| `start:dashboard`  | The same with `start` and webpack bundle info will be turned into dashboard mode.          |
| `start:production` | Bundle files to `./public/assets` and run it on the production server at `localhost:8080`. |
| `start:prod`       | Run your app on the production server only at `localhost:8080`.                            |
| `build`            | Remove the previous bundled files and bundle it to `./public/assets`.                      |
| `analyze`          | Viusalize the contents of all your bundles.                                                |
| `lint`             | Lint all `.js` and `.scss` files.                                                          |
| `lint:js`          | Lint all `.js` files (Use `--fix` to auto fix eslint errors).                              |
| `lint:style`       | Lint all `.scss` files (Use `--fix` to auto fix stylelint errors).                         |
| `flow`             | Run type checking for `.js` files.                                                         |
| `flow:stop`        | Stop type checking.                                                                        |
| `test`             | Run testing once (with code coverage reports).                                             |
| `test:watch`       | Run testing on every test file change.                                                     |
| `clean:all`        | Remove the client/server bundled stuff and the coverage report.                            |
| `clean:build`      | Remove the `./public/assets` folder to clean the client bundled files.                     |
| `clean:test`       | Remove the `./coverage` folder to clean the code coverage report.                          |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                          # Express server static path/Webpack bundled output
│   └── favicon.ico                 # Favicon is placed in the same path with the main HTML page
├── src                             # App source code
│   ├── __tests__                   # Folder to keep all the App test files
│   ├── assets                      # App global assets
│   │   ├── img                     # App global image assets
│   │   └── scss                    # App global styles and themes
│   ├── config                      # App configuration settings
│   │   ├── default.js              # Default settings
│   │   ├── index.js                # Configuration entry point
│   │   └── prod.js                 # Production settings (overrides the default settings)
│   ├── components                  # Reusable components (including scss/testing files)
│   ├── containers                  # Container components (including scss/testing files)
│   ├── actions                     # Redux actions (including testing files)
│   ├── reducers                    # Redux reducers (including testing files)
│   ├── helpers                     # App-wide helpers (e.g. configure Redux store, HTML template etc.)  
│   ├── types                       # Flow types for reducer, action, state, store
│   ├── client.js                   # App bootstrap and rendering (webpack entry)
│   ├── routes.js                   # Routes configuration for both client and server side
│   └── server.js                   # Express server (with webpack dev/hot middlewares)
├── tools                           # Project related configurations (testing/build etc.)
│   ├── flow                        # Flow types, interface, module aliasing definitions
│   ├── openBrowser                 # Utility for opening Google Chrome
│   ├── jest                        # Jest CSS modules and assets mocks settings
│   ├── webpack                     # Webpack settings
│   │   ├── config.babel.js         # Webpack configuration
│   │   └── hooks.js                # Assets require hooks
├── index.js                        # App entry point
└── .babelrc                        # Babel configuration
└── .eslintrc.js                    # ESLint configuration
└── .stylelintrc                    # StyleLint configuration
└── jest.config.js                  # Jest configuration
└── nodemon.json                    # Nodemon configuration
└── postcss.config.js               # PostCSS configuration
```

## Credit

* Create React App https://github.com/facebookincubator/create-react-app

This boilerplate takes refrences in other super cools repos:

* Thanks for https://github.com/wellyshen/react-cool-starter/ for the base!
* Some ideas from https://github.com/mrholek/CoreUI-React
* Redux base from https://github.com/SophieDeBenedetto/catbook-redux/tree/blog-post
* Also https://github.com/reactjs/redux/tree/master/examples/real-world

## ToDo

There're some features (updates) which will be included in this starter in the near future:

* [ ] Bootstrap and font-awesome for themes
* [ ] Semple page using Redux/React-router preload data
* [ ] GSAP for annimation framework
* [ ] Upgrade to [Babel 7](https://babeljs.io/blog/2017/03/01/upgrade-to-babel-7) as soon as the stable version released.
* [ ] Upgrade to [Webpack 4](https://github.com/webpack/webpack/milestone/15) as soon as the stable version released.
