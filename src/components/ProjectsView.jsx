import React, { useEffect } from 'react'

import './ProjectsView.css'
import { HiViewGrid } from 'react-icons/hi'
import ProjectPreviewCard from './ProjectPreviewCard'
import RevealOnScroll from './ReveaLOnScroll.jsx'


import ProjectsHandler from '../models/ProjectsHandler.js'

const ProjectsView = () => {

    const [modalDetails, setModalDetails] = React.useState({
        isModalOpen: false,
        project: null
    });
    const toggleModal = (project = null) => {
        setModalDetails((prev) => { 
            return {...prev, isModalOpen: !prev.isModalOpen, project: project} 
        });
    };

    useEffect(() => {
        if (modalDetails.isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }, [modalDetails.isModalOpen]);

  return (
    <section id="my-projects" className="container projects-view">
        <div className='projects-view-title-container'>
            <h2 className='projects-view-title'>Projects</h2>
            {/* <a href='./projects' className='projects-view-all'><HiViewGrid /> <span>VIEW ALL</span></a>     */}
        </div>
        <div className='projects-grid'>

            {ProjectsHandler.getInstance().getProjects().map((project, index) => (
                <RevealOnScroll key={index} index={index}>
                    <ProjectPreviewCard onModalOpen={toggleModal} project={project} />
                </RevealOnScroll>
            ))}
            
        </div>
        {modalDetails.isModalOpen && (
          <div className="modal-backdrop" onClick={toggleModal}>
            <div className="modal-content">
              <img src={modalDetails.project.thumbnailURL} alt={`${modalDetails.project.title} full preview`} />
            </div>
          </div>
        )}
    </section>
  )
}

export default ProjectsView