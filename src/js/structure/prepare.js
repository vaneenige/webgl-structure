import * as THREE from 'three';

import props from './config/defaults';
import settings from './config/settings';

import createEnvironment from './environment';
import createUser from './user';
import render from './render';

/**
 * Create scene of type THREE.scene.
 */
const createScene = () => {
  props.scene = new THREE.Scene();
};

/**
 * Create renderer of type THREE.WebGLRenderer.
 */
const createRenderer = () => {
  // Create the renderer
  props.renderer = new THREE.WebGLRenderer({
    // Canvas background will be transparent if no backgroundColor is set
    alpha: !settings.backgroundColor,
  });

  // Set the pixel ratio for detail or performance
  props.renderer.setPixelRatio(settings.mobile ? 1 : settings.defaultPixelRatio);

  // Set the size of the render to fit the window
  props.renderer.setSize(window.innerWidth, window.innerHeight);

  // TODO: Check for which cases this is necessary
  props.renderer.gammaInput = true;

  // TODO: Check for which cases this is necessary
  props.renderer.gammaOutput = true;

  // Append the render canvas to the DOM
  document.body.appendChild(props.renderer.domElement);
};

/**
 * Create camera of type THREE.PerspectiveCamera.
 */
const createCamera = () => {
  // Create the camera
  props.camera = new THREE.PerspectiveCamera(
    settings.camera.fov,
    settings.camera.aspect,
    settings.camera.near,
    settings.camera.far,
  );

  // Set camera position
  props.camera.position.set(0, 35, 0);

  // Set camera target position
  props.camera.lookAt(new THREE.Vector3(0, 0, 0));
};

/**
 * Create all necessary parts of the architecture and start building.
 */
export default () => {
  createScene();
  createRenderer();
  createCamera();

  createEnvironment();
  createUser();
  render();
};
