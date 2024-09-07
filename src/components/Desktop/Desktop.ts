import Component from '../../Decorators/ComponentDecorator';
import BaseComponent from '../BaseComponent';
import DesktopComponentHTML from './Desktop.html';
import './Desktop.css';

@Component(DesktopComponentHTML)
export default class DesktopComponent extends BaseComponent {}
