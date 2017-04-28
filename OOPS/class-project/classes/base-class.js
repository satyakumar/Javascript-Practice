export class BaseClass {
    constructor() {
        this.element = null;
    }
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
    }
    createElement() {
        let s = getElementString();
        this.element = $(s);
    }
    getElementString() {
        throw "override this";
    }
}