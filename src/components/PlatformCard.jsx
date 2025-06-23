import React from 'react'
import * as FaIcons from 'react-icons/fa';

const PlatformCard = ({platform}) => {
    const platformDetails = platform.viewOnPlatform;
    const url = platform.url;
    const PlatformIcon = FaIcons[platformDetails.icon] || FaGlobe;
    

  return (
    <a target='_blank' href={url} style={{
        width: 'fit-content',
        height: 'fit-content',
        padding: '0.5rem 1rem',
        backgroundColor: `var(--accent)`,
        color: 'var(--color-slate100)',
        borderRadius: '0.1em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    }}><PlatformIcon />{platformDetails.viewOnText}</a>
  )
}

export default PlatformCard