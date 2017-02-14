import Stats from 'stats.js';

import tools from '../config/tools';

/**
 * Add the FPS meter.
 */
export default () => {
  tools.stats = new Stats();
  tools.stats.showPanel(0);
  document.body.appendChild(tools.stats.dom);
};
