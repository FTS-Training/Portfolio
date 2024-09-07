import './styles/index.css';
import { setWindowsState } from './appState';
import DesktopComponent from './components/Desktop/Desktop';
import { Windows } from './types';

function initApp() {
  const initWindows: Windows = {
    config: {
      desktopBackgroundImage: './assets/windows10BackgroundImage.jpg',
    },
  };

  setWindowsState(initWindows);
  const desktop = new DesktopComponent('app');
  desktop.render();
}
initApp();
