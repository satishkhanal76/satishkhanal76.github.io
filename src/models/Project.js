import ProjectTechnologies from './ProjectTechnologies.js';

export default class Project {

    #id;
    #title;
    #shortDescription;
    #description;

    #projectTechnologies;

    /**
     * @param {string} id - Unique identifier for the project
     * @param {string} title - Title of the project
     * @param {string} shortDescription - A brief description of the project
     * @param {string} description - Detailed description of the project
     */
    constructor(id, title, shortDescription, description) {
        this.#id = id;
        this.#title = title;
        this.#shortDescription = shortDescription;
        this.#description = description;

        this.#projectTechnologies = new ProjectTechnologies();
    }


    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get shortDescription() {
        return this.#shortDescription;
    }
    get description() {
        return this.#description;
    }

    get technologies() {
        return this.#projectTechnologies;
    }
 }