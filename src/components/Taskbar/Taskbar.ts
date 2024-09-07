import component from './Taskbar.html';
import './Taskbar.css';

export function createComponent() {
  const componentElement = document.getElementById('app');
  if (componentElement) componentElement.innerHTML = component;
}
