import React from 'react'

import * as SiIcons from 'react-icons/si'
import { FaGlobe } from 'react-icons/fa'

const TechnologyCard = ({
    technology
}) => {
    const { title, icon } = technology;

    const TechnologyIcon = SiIcons[icon] || FaGlobe;
  return (
    <div className='technology-card' title={title} style={{
        width: 'fit-content',
        height: 'fit-content',
        padding: '0.5rem 1rem',
        backgroundColor: `var(--color-slate600)`,
        color: `var(--color-slate200)`,
        borderRadius: '2em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        display: 'inline-flex',
    }}>
        <TechnologyIcon className='technology-icon' />
        <span className='technology-name'>{title}</span>
    </div>
  )
}

export default TechnologyCard