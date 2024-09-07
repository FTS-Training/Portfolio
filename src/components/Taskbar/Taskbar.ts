
import { v4 as uuid } from 'uuid';
import TaskbarComponentHTML from './Taskbar.html';
import { createElementFromHTML } from '../../utils/utils';
import './Taskbar.css';

export class TaskbarComponent {
  private parentId: string;
  private componentElement: HTMLElement | null = null;
  private componentId: string;

  constructor(parentId: string) {
    this.parentId = parentId;
    this.componentId = uuid();
  }

  private generateComponentElement(): void {
    const element = createElementFromHTML(TaskbarComponentHTML);
    this.componentElement = element as HTMLElement;

    if (this.componentElement) {
      this.componentElement.setAttribute('data-component-id', this.componentId);
    }
  }

  public render(): void {
    const parentElement = document.querySelector(`[data-component-id="${this.parentId}"]`) as HTMLElement | null;
    if (!parentElement) return;

    this.generateComponentElement();
    if (this.componentElement) {
      parentElement.appendChild(this.componentElement);
    }
  }
}
