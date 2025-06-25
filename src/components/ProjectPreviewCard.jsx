import { BiImageAlt } from 'react-icons/bi'
import { FaImage } from 'react-icons/fa'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { MdBrokenImage } from 'react-icons/md'
import TechnologyCard from './TechnologyCard'
import PlatformCard from './PlatformCard'
import { useState } from 'react'



const brokenImageIcons = [
  MdBrokenImage, HiOutlinePhotograph, FaImage, BiImageAlt
]

const ProjectPreviewCard = ({
  project,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { title, shortDescription, technologies, platforms, thumbnailURL } = project;

  const BrokenIcon = brokenImageIcons[Math.floor(Math.random() * brokenImageIcons.length)];
  return (
    <div className="project-card">
        <div className="project-card-thumbnail">
            {thumbnailURL ? 
                  <img
                    onClick={toggleModal}
                    src={thumbnailURL}
                    alt={`${title} thumbnail`}
                    className="project-thumbnail-image"
                  />
            : (
              <BrokenIcon className="image-icon" />
            )}
        </div>
        <h4 className="project-card-title">{title}</h4>
        <p className="project-card-description">{shortDescription}</p>
        {platforms.getPlatforms().length > 0 && (
          <div className='project-card-platforms'>
            <p>VIEW IT ON:</p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              {platforms.getPlatforms().map((platform, index) => (
                <PlatformCard key={index} platform={platform} />
              ))}
            </div>
          </div>
        )}
        {technologies.getTechnologies().length > 0 && (
          <div className=''>
            <p>USES:</p>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            {technologies.getTechnologies().map((tech, index) => (
              <TechnologyCard key={index} technology={tech} />
            ))}
          </div>
          </div>
        )}
        {isModalOpen && (
          <div className="modal-backdrop" onClick={toggleModal}>
            <div className="modal-content">
              <img src={thumbnailURL} alt={`${title} full preview`} />
            </div>
          </div>
        )}
    </div>
  )
}

export default ProjectPreviewCard