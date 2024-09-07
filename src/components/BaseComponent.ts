import { nanoid } from 'nanoid';
import { createElementFromHTML } from '../utils/utils';
import { BaseComponentType } from '../interfaces/BaseComponent';

class BaseComponent implements BaseComponentType {
  protected parentId: string;
  protected componentElement: HTMLElement | null = null;
  protected componentId: string;
  private HTMLTemplate: string = '<div></div>';

  constructor(parentId: string) {
    this.parentId = parentId;
    this.componentId = nanoid(12);
  }

  private generateComponentElement(): void {
    const element = createElementFromHTML(this.HTMLTemplate);
    this.componentElement = element as HTMLElement;

    if (this.componentElement) {
      this.componentElement.setAttribute('data-component-id', this.componentId);
    }
  }

  protected setHTMLTemplate(template: string): void {
    this.HTMLTemplate = template;
    this.generateComponentElement();
  }

  public render(): void {
    const parentElement = document.querySelector(
      `[data-component-id="${this.parentId}"]`
    ) as HTMLElement | null;

    if (!parentElement) return;

    if (this.componentElement) {
      parentElement.appendChild(this.componentElement);
    }
  }
}

export default BaseComponent;
