# Modern WebGL Structure

During recent work related and personal projects I've been playing a lot with WebGL. Getting more and more involved with ES6 code I wanted to create a modern structure to easily configure a WebGL workflow and create a prototype without the need of doing the same setup over and over again.

In January of 2017 I've been working on expanding my WebGL knowledge and created several experiments on [Codepen](http://codepen.io/cvaneenige/) with [THREE.js](https://threejs.org). Creating these experiments taught me a lot and they have been well-received by the community.

## Installation

1. Run `npm install`.
This will install all dependencies needed for the application to run.

2. Run `npm run development`. This will watch and compile your Javascript files.

3. Navigate to `localhost:3000`. You should see a moving cube!

## Usage

This workflow is based on ES6 techniques and useful tools to make development of your THREE.js application as easy as possible!

#### Global variables
Variables in ES6 can be made easily accessible by using `imports`. Importing one of the objects below gives you the opportunity to change them in one place and use them in another (these will update automatically).

* **Defaults:** Used to store all THREE.js object: scene, renderer, camera and an object for structure elements like geometries and materials. These can be used in the GUI to update them in real-time.

* **Settings:** Used to store overall user settings, camera variables, canvas background color, default device pixel ratio and a check for mobile devices.

* **Tools:** Used to store useful tools like a [GUI](https://github.com/dataarts/dat.gui) for changing variables in real-time, [orbit controls](https://github.com/mattdesl/three-orbit-controls) for user movement in the THREE.js world and a [stats monitor](https://github.com/mrdoob/stats.js/) to keep track of performance in the application. *These can all be turned on and off in the user settings.*

#### THREE.js
To create amazing things with THREE.js you should only have to focus on two things: Creating the magical environment and bringing it to life with movement.

* **Create:** After creating the basic requirements to run a THREE.js world the environment is created. This environment can be stored globally and adjusted by the GUI. This can be found in `environment.js`.

* **Render:** After the environment is created, and the optional tools are enabled, the render function is called and should optimally run at least 60 times a second. Besides the necessary things like updating the stats and setting a background color there's a clean function for updating the environment. This can be found in `render.js`;

#### Overall Workflow
To enhance the overall workflow these tools are really helpful to stay consistent with your code style and applying new techniques and standards while staying backwards compatible.

* **Webpack:** Used to compile Javascript (with [Babel](https://babeljs.io)) for backwards compatibility. Running the development script watches and bundles Javascript as you develop and offers a localhost to see your application run on. Running the production script bundles the Javascript once and uglifies it to get the smallest size available. More documentation can be found [here](https://webpack.js.org).

* **ESLint:** Used to maintain Javascript code standards throughout the project. This workflow uses the [Airbnb Style Guide](https://github.com/airbnb/javascript) and can be adjusted to your liking in the `.eslintrc` file.  More documentation can be found [here](http://eslint.org).

## Experiments
While creating these Codepen experiments this workflow improved a lot. I'd love to hear your thoughts on how to make it even better and see your creations!

* [Basic Geometry Animation](http://codepen.io/cvaneenige/full/jyEPPm)

* [Light Reflecting Donuts](http://codepen.io/cvaneenige/full/egNYmb/)

* [Light Reflecting Monkeys](http://codepen.io/cvaneenige/full/PWqqRN)

* [Particle Stream](http://codepen.io/cvaneenige/full/rjVvdM)

* [Rainbow Sprinkles](http://codepen.io/cvaneenige/full/dNYqbp/)

* [Combination is key](http://codepen.io/cvaneenige/full/zNqmxv/)

* [Rainbow Balloons](http://codepen.io/cvaneenige/full/dNXjga/)

## License

MIT
