import * as THREE from 'three';

import props from './config/defaults';

/**
 * Build the environment.
 */
export default () => {
  const lights = [];
  lights[0] = new THREE.PointLight(0xffffff, 0.2, 0);
  lights[1] = new THREE.PointLight(0xffffff, 0.2, 0);
  lights[2] = new THREE.PointLight(0xffffff, 0.2, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);

  props.scene.add(lights[0]);
  props.scene.add(lights[1]);
  props.scene.add(lights[2]);

  const geometry = new THREE.BoxGeometry(5, 5, 5);
  const material = new THREE.MeshPhongMaterial({
    color: 0xFFC107,
    emissive: 0x00BFA5,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading,
  });

  props.structure.cube = new THREE.Mesh(geometry, material);
  props.scene.add(props.structure.cube);
};
