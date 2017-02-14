import dat from 'dat.gui';

import tools from '../config/tools';

/**
 * Add the GUI.
 */
export default () => {
  tools.gui = new dat.GUI();
  tools.gui.close();
};
