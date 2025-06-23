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
  const { title, shortDescription, technologies } = project;

  const BrokenIcon = brokenImageIcons[Math.floor(Math.random() * brokenImageIcons.length)];
  return (
    <div className="project-card">
        <div className="project-card-thumbnail">
            {/* {thumbnailURL ? (
                <img src={thumbnailURL} alt={`${title} thumbnail`} className="project-thumbnail-image" />
            ) : (
              <BrokenIcon className="image-icon" />
            )} */}

            <BrokenIcon className="image-icon" />
        </div>
        <h4 className="project-card-title">{title}</h4>
        <p className="project-card-description">{shortDescription}</p>
        {technologies.getTechnologies().length > 0 && (
          <div className='project-card-technologies' style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            {technologies.getTechnologies().map((tech, index) => (
              <TechnologyCard key={index} technology={tech} />
            ))}
          </div>
        )}
    </div>
  )
}

export default ProjectPreviewCard