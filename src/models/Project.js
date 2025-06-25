import ProjectTechnologies from './ProjectTechnologies.js';
import ProjectViewOnPlatforms from './ProjectViewOnPlatforms.js';

export default class Project {

    #id;
    #title;
    #shortDescription;
    #description;

    #projectTechnologies;

    #projectViewOnPlatforms;

    #thumbnailURL;

    /**
     * @param {string} id - Unique identifier for the project
     * @param {string} title - Title of the project
     * @param {string} shortDescription - A brief description of the project
     * @param {string} description - Detailed description of the project
     */
    constructor(id, title, shortDescription, description, thumbnailURL) {
        this.#id = id;
        this.#title = title;
        this.#shortDescription = shortDescription;
        this.#description = description;
        this.#thumbnailURL = thumbnailURL;

        this.#projectTechnologies = new ProjectTechnologies();
        this.#projectViewOnPlatforms = new ProjectViewOnPlatforms();
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

    get platforms() {
        return this.#projectViewOnPlatforms;
    }

    get thumbnailURL() {
        return this.#thumbnailURL;
    }
 }