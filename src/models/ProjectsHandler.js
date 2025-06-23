import Project from './Project.js';
import projects from '/public/data/projects.json'


export default class ProjectsHandler {

    static #instance = null;

    #projects;

    constructor() {
        this.#projects = [];
    }

    
    static getInstance(projectsData = null) {
        if (!ProjectsHandler.#instance) {
            ProjectsHandler.#instance = new ProjectsHandler();

            if(projectsData) {
                projectsData.forEach(project => ProjectsHandler.#instance.addProject(project));
            }else {
                projects.forEach(project => ProjectsHandler.#instance.addProject(project));

            }
        }
        return ProjectsHandler.#instance;
    }

    addProject(projectData) {
        const project = new Project(
            projectData.id,
            projectData.title,
            projectData.shortDescription,
            projectData.description
        );

        projectData.technologiesUsed.forEach(technologyID => {
            project.technologies.addTechnologyById(technologyID);
        });

        projectData.viewOnPlatforms.forEach(platform => {
            project.platforms.addProjectPlatform(platform);
        })

        this.#projects.push(project);
        
    }

    getProjects() {
        return this.#projects;
    }

}