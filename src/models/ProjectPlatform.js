export default class ProjectPlatform {

    #viewOnPlatform;
    #url;


    constructor(viewOnPlatform, url) {
        this.#viewOnPlatform = viewOnPlatform;
        this.#url = url;
    }

    get viewOnPlatform() {
        return this.#viewOnPlatform;
    }

    get url() {
        return this.#url;
    }
}