import React from 'react'
import { CertificateListItem } from './CertificateListItem'

export const CertificateList = ({ sertificatData }) => {
  return (
    <ul className="certificates__list">

      {sertificatData.map((sertificate) => (
        
        <CertificateListItem key={sertificate.id} sertificate={sertificate}/>
      ))}

    </ul>
  )
}
