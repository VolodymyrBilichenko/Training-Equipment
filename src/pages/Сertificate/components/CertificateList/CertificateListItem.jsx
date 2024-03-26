import React from 'react'

export const CertificateListItem = ({ sertificate }) => {
  return (
    <li className="certificates__card">
        <a href="some" className="certificates__card_image ">
            <picture>
                <img src={sertificate.files[0].web_path} alt="certificate ph" width="299" height="423" loading="lazy"/>
            </picture>
        </a>
        <a href="some" className="certificates__card_name">
            {sertificate.description}
        </a>
    </li>
  )
}
