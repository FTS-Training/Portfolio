import { setWindowsState } from '../appState';
import { createComponent } from '../components/Taskbar/Taskbar';
import { Windows } from '../types/Windows';
import '../styles/index.css';

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
