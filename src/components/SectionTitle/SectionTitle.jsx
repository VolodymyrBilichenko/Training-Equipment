import React from 'react'
import HTMLReactParser from "html-react-parser";

export const SectionTitle = ({ title, ClassTitle }) => {
  return (
    <h2 className={`section-title ${ClassTitle}`}>
        {
          HTMLReactParser(title)
        }
    </h2>
  )
}
