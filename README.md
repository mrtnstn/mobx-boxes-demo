MobX Boxes Demo
=====================

This project is a recreation of the original and awesome [MobX demo](https://github.com/mobxjs/mobx-reactive2015-demo) created by Michel Weststrate for [ReactiveConf](https://www.youtube.com/watch?v=FEwLwiizlk0)

The demo illustrates how you can create a simple drag & drop editor using [MobX](https://github.com/mobxjs/mobx) and React.

The slides of Michel Weststrate's talk can be found [here](https://docs.google.com/presentation/d/16hE-cxJ8C5XQVjql17krNAeYNF_9I3n3j13ho-KLWYU/edit#slide=id.p).

Unfortunately, the original demo hasn't been maintained. I brought it up to standard with the latest versions of React, MobX4 and create-react-app. I also switched the code to typescript, which I believe is really important if you want to build on this template for larger projects.

## Usage

To interact with the application:
* Click to select.
* Boxes can be dragged around.
* Use the input box to rename stuff.
* CTRL + click to add new boxes. If there is an active selection an arrow will be added as well.
* Use the tiny buttons in the bottom left to generate a bunch of random boxes and arrows, and to travel forward and backward in time.

## Run the example

```
npm install
npm start
open http://localhost:3000
```

## Development notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
using the --typescript option.

[MobX](https://mobx.js.org/) has been added in from the start for state management.

In order to use the MobX decorators, the use of "experimentalDecorators" is switched on in the tsconfig.json.

Original README from create-react-app below:

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
