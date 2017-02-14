export default {
  /**
   * Give the user some powers (or not).
   */
  user: {
    gui: false,
    orbit: false,
    stats: false,
  },

  /**
   * Set the camera properties.
   */
  camera: {
    fov: 45,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 3500,
  },

  /**
   * Background color used on draw (false for transparent).
   */
  backgroundColor: 0xEFEFEF,

  /**
   * Set a default pixel ratio (1 for more performance).
   */
  defaultPixelRatio: window.devicePixelRatio,

  /**
   * Check for mobile device (for devicePixelRatio or less intensive stuff).
   */
  mobile: (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
};
