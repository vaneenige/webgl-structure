import props from './config/defaults';
import settings from './config/settings';
import tools from './config/tools';

/**
 * Update the environment.
 */
const updateEnvironment = () => {
  props.structure.cube.rotation.x += 0.01;
  props.structure.cube.rotation.z += 0.01;
};

/**
 * Render function called on every frame.
 */
export default function render() {
  // Begin frame analysis
  if (settings.user.stats) tools.stats.begin();

  // Update optional background color
  if (settings.backgroundColor !== false) props.renderer.setClearColor(settings.backgroundColor);

  // Update the environment
  updateEnvironment();

  // End frame analysis
  if (settings.user.stats) tools.stats.end();

  // Request the next frame
  requestAnimationFrame(render);

  // Render the current frame
  props.renderer.render(props.scene, props.camera);
}

/**
 * Update the camera and renderer based on window size.
 */
const windowResizeHandler = () => {
  props.camera.aspect = window.innerWidth / window.innerHeight;
  props.camera.updateProjectionMatrix();
  props.renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', windowResizeHandler, false);
