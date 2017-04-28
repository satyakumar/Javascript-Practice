import {BaseClass} from './base-class.js';
export class Button extends BaseClass {
    constructor(title) {
        super();
        this.title = title;
    }
    getElementString() {
        return `<button>${this.title}</button>`;
    }
}