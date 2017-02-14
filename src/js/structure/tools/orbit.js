import * as THREE from 'three';

import props from '../config/defaults';
import tools from '../config/tools';

const OrbitControls = require('three-orbit-controls')(THREE);

/**
 * Add orbit controls.
 */
export default () => {
  tools.orbit = new OrbitControls(props.camera, props.renderer.domElement);
  tools.orbit.enableZoom = true;
};
