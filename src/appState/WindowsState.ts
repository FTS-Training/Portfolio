import { set, get, cloneDeep } from 'lodash';
import { Windows } from '../types';

const WindowsState: Windows = {
  config: {
    desktopBackgroundImage: './assets/windows10BackgroundImage.jpg',
  },
};

export function setWindowsState(newWindows: Windows): void {
  Object.assign(WindowsState, cloneDeep(newWindows));
}

export function updateWindowsState(statePath: string, value: unknown): void {
  set(WindowsState, statePath, cloneDeep(value));
}

export function getWindowsState(name: string): unknown {
  return get(WindowsState, name);
}
