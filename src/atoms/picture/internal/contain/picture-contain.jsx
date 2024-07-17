import React from 'react'
const PictureContain = ({ alternativeText, source }) => {
  return (
    <picture className="w-full h-full">
        <source media="(max-width: 375px)" srcSet={source} />
        <source media="(max-width: 640px)" srcSet={source} />
        <img
            alt={alternativeText}
            className="w-full h-full object-contain"
            src={source}
        />
    </picture>
  )
}
export default PictureContain
