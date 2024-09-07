import { Windows } from '../types';
import { set, get } from 'lodash';

const WindowsState: Windows = {
  desktop: [],
  myComputer: [],
  recycleBin: [],
  documents: [],
  desktopBackgroundImage: '',
};

export function setWindowsState(value: Windows) {
  set(WindowsState, '', value);
}

export function updateWindowsState(statePath: string, value: unknown) {
  set(WindowsState, statePath, value);
}

export function getWindowsState(name: string) {
  return get(WindowsState, name);
}
