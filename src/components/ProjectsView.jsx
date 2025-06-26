import React from 'react'

import './ProjectsView.css'
import { HiViewGrid } from 'react-icons/hi'
import ProjectPreviewCard from './ProjectPreviewCard'
import RevealOnScroll from './ReveaLOnScroll.jsx'


import ProjectsHandler from '../models/ProjectsHandler.js'

const ProjectsView = () => {
  return (
    <section id="my-projects" className="container projects-view">
        <div className='projects-view-title-container'>
            <h2 className='projects-view-title'>Projects</h2>
            <a href='./projects' className='projects-view-all'><HiViewGrid /> <span>VIEW ALL</span></a>    
        </div>
        <div className='projects-grid'>

            {ProjectsHandler.getInstance().getProjects().map((project, index) => (
                <RevealOnScroll key={index} index={index}>
                    <ProjectPreviewCard project={project} />
                </RevealOnScroll>
            ))}
            
        </div>
    </section>
  )
}

export default ProjectsView