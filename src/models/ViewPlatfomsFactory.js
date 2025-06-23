import ViewPlatform from "./ViewPlatform";
import viewOnPlatformsData from "/public/data/viewOnPlatforms.json"
export default class ViewPlatformsFactory {


    static #instance = null;


    #viewOnPlatforms;

    constructor(viewOnPlatforms) {
        this.#viewOnPlatforms = viewOnPlatforms;
    }

    /**
     * Singleton instance of Platforms
     * @returns {ViewPlatformsFactory}
     */
    static getInstance(platforms = null) {
        if (!ViewPlatformsFactory.#instance) {
            ViewPlatformsFactory.#instance = new ViewPlatformsFactory([]);

            if(platforms) {
                ViewPlatformsFactory.initialize(platforms);
            }else {

                ViewPlatformsFactory.initialize(viewOnPlatformsData);
            }
        }
        return ViewPlatformsFactory.#instance;
    }


    static initialize(viewOnPlatforms) {
        const instance = ViewPlatformsFactory.getInstance();

        viewOnPlatforms.forEach(platform => {
            instance.addPlatform(new ViewPlatform(
                platform.id,
                platform.title,
                platform.viewOnText,
                platform.icon
            ));
        });
        return instance;
    }

    addPlatform(platform) {
        this.#viewOnPlatforms.push(platform);
    }

    static getPlatformById(id) {
        const instance = ViewPlatformsFactory.getInstance();
        return instance.platforms.find(p => p.id === id);
    }


    get platforms() {
        return this.#viewOnPlatforms;
    }
}