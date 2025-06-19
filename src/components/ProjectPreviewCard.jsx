import React from 'react'
import { BiImageAlt } from 'react-icons/bi'
import { FaImage } from 'react-icons/fa'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { MdBrokenImage } from 'react-icons/md'
import technologiesData from '/public/data/technologies.json'
import TechnologyCard from './TechnologyCard'



const brokenImageIcons = [
  MdBrokenImage, HiOutlinePhotograph, FaImage, BiImageAlt
]

const ProjectPreviewCard = ({
  project,
}) => {
  const { title, shortDescription, thumbnailURL, technologiesUsed } = project;

  const BrokenIcon = brokenImageIcons[Math.floor(Math.random() * brokenImageIcons.length)];
  return (
    <div className="project-card">
        <div className="project-card-thumbnail">
            {thumbnailURL ? (
                <img src={thumbnailURL} alt={`${title} thumbnail`} className="project-thumbnail-image" />
            ) : (
              <BrokenIcon className="image-icon" />
            )}
        </div>
        <h4 className="project-card-title">{title}</h4>
        <p className="project-card-description">{shortDescription}</p>
        {technologiesUsed && technologiesUsed.length > 0 && (
          <div className='project-card-technologies' style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            {technologiesUsed.map((tech, index) => {
              const technology = technologiesData.find(t => t.id === tech);
              if (!technology) return null;
              return (<TechnologyCard key={index} technology={technology} />)
            })}
          </div>
        )}
    </div>
  )
}

export default ProjectPreviewCard