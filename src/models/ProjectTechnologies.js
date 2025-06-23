import TechnologiesFactory from "./TechnologiesFactory";

export default class ProjectTechnologies {

    #technologies;

    constructor() {
        this.#technologies = [];
    }

    addTechnologyById(id) {
        const tech = TechnologiesFactory.getTechnologyById(id);
        if(tech) {
            this.#technologies.push(tech);
        }
    }

    getTechnologies() {
        return this.#technologies;
    }

}