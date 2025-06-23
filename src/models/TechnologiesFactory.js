import Technology from './Technology.js';

import technologiesData from '/public/data/technologies.json';

export default class TechnologiesFactory {

    static #instance = null;

    #technologies;

    /**
     * @param {Array} technologies - Array of technology objects
     */
    constructor(technologies) {
        this.#technologies = technologies;
    }

    get technologies() {
        return this.#technologies;
    }

     /**
     * Singleton instance of Technologies
     * @returns {TechnologiesFactory}
     */
    static getInstance() {
        if (!TechnologiesFactory.#instance) {
            TechnologiesFactory.#instance = new TechnologiesFactory([]);
            TechnologiesFactory.initialize(technologiesData);
        }
        return TechnologiesFactory.#instance;
    }

    /**
     * Initializes the technologies with a given array of technology objects
     * @param {Array} technologies - Array of technology objects
     * @return {TechnologiesFactory}
     * */
    static initialize(technologies) {
        const instance = TechnologiesFactory.getInstance();

        technologies.forEach(tech => {
            instance.addTechnology(new Technology(
                tech.id,
                tech.title,
                tech.type,
                tech.precedence,
                tech.icon
            ));
        });
        return instance;
    }


    addTechnology(technology) { 
        this.#technologies.push(technology);
    }

    static getTechnologyById(id) {
        const instance = TechnologiesFactory.getInstance();
        return instance.technologies.find(tech => tech.id === id);
    }


}