/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseComponentType } from '../interfaces/BaseComponent';

function Component<T extends new (...args: any[]) => BaseComponentType>(
  template: string
) {
  return function (constructor: T) {
    return class extends constructor {
      [x: string]: any;
      constructor(...args: any[]) {
        super(...args);
        this.setHTMLTemplate(template);
      }
    };
  };
}

export default Component;
