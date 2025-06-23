export default class Technology {

    #id;
    #title;
    #type;
    #precedence;
    #icon;


    /**
     * @param {string} id - Unique identifier for the technology
     * @param {string} title - Title of the technology
     * @param {string} type - Type of the technology (e.g., 'frontend', 'backend', 'database')
     * @param {number} precedence - Precedence level of the technology (lower number means higher precedence)
     * @param {string} icon - Icon representing the technology
     */
    constructor(id, title, type, precedence, icon) {
        this.#id = id;
        this.#title = title;
        this.#type = type;
        this.#precedence = precedence;
        this.#icon = icon;
    }

    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get type() {
        return this.#type;
    }
    get precedence() {
        return this.#precedence;
    }
    get icon() {
        return this.#icon;
    }
}