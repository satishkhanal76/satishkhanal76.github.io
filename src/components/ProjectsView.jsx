import React from 'react'

import './ProjectsView.css'
import { HiViewGrid } from 'react-icons/hi'
import ProjectPreviewCard from './ProjectPreviewCard'

import projectsData from '/public/data/projects.json'

const ProjectsView = () => {
  return (
    <section id="my-projects" className="container projects-view">
        <div className='projects-view-title-container'>
            <h2 className='projects-view-title'>Projects</h2>
            <a href='./projects' className='projects-view-all'><HiViewGrid /> <span>VIEW ALL</span></a>    
        </div>
        <div className='projects-grid'>

            {projectsData.map((project, index) => (
                <ProjectPreviewCard 
                    key={index}
                    project={project}
                />
            ))}
            
        </div>

        {/* <div className="technologies" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginTop: '2rem',
            padding: '1rem',
        }}>
            {technologiesData.map((tech, index) => <TechnologyCard key={index} technology={tech} />)}
        </div> */}
    </section>
  )
}

export default ProjectsView