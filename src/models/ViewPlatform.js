export default class ViewPlatform {

    #id;
    #title;
    #viewOnText;
    #icon;

    constructor(id, title, viewOnText, icon) {
        this.#id = id;
        this.#title = title;
        this.#viewOnText = viewOnText;
        this.#icon = icon;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get viewOnText() {
        return this.#viewOnText;
    }
    get icon() {
        return this.#icon;
    }
}