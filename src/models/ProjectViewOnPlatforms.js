import ProjectPlatform from "./ProjectPlatform";
import ViewPlatformsFactory from "./ViewPlatfomsFactory";

export default class ProjectViewOnPlatforms {


    #platforms;


    constructor() {
        this.#platforms = [];
    }

    addProjectPlatform(projectPlatform) {
        const viewOnPlatform = ViewPlatformsFactory.getPlatformById(projectPlatform.id);
        this.#platforms.push(new ProjectPlatform(viewOnPlatform, projectPlatform.url));
    }

    getPlatforms() {
        return this.#platforms;
    }
}