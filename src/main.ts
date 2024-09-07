import './styles/index.css';
import { setWindowsState } from './appState';
import { createComponent } from './components/Taskbar/Taskbar';
import { Windows } from './types/Windows';

function initApp() {
  const initWindows: Windows = {
    desktop: [],
    myComputer: [],
    recycleBin: [],
    documents: [],
    desktopBackgroundImage: './assets/windows10BackgroundImage.jpg',
  };

  setWindowsState(initWindows);
  createComponent();
}
initApp();
