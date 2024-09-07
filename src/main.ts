import './styles/index.css';
import { setWindowsState } from './appState';
import { createComponent } from './components/Taskbar/Taskbar';
import { Windows } from './types';

function initApp() {
  const initWindows: Windows = {
    config: {
      desktopBackgroundImage: './assets/windows10BackgroundImage.jpg',
    },
  };

  setWindowsState(initWindows);
  createComponent();
}
initApp();
