import { v4 as uuid } from 'uuid';

export function createElementFromHTML(
  htmlString: string,
  componentId?: string
): Element | null {
  if (!htmlString.trim()) {
    throw new Error('HTML string is empty');
  }
  const container = document.createElement('div');
  container.innerHTML = htmlString;
  const element = container.firstElementChild;
  if (componentId) {
    element?.setAttribute('data-component-id', componentId);
  } else {
    element?.setAttribute('data-component-id', uuid());
  }
  return element;
}
