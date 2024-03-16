import React from 'react'

export const SectionTitle = ({ title, ClassTitle }) => {
  return (
    <h2 className={`section-title ${ClassTitle}`}>
        {title}
    </h2>
  )
}
