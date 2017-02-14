import settings from './config/settings';

import addGUI from './tools/gui';
import addOrbitControls from './tools/orbit';
import addStats from './tools/stats';

export default () => {
  if (settings.user.gui) addGUI();
  if (settings.user.orbit) addOrbitControls();
  if (settings.user.stats) addStats();
};
