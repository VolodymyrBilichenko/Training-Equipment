import React from 'react'

import SertificateImg from '../../../../assets/img/certificates/certificate-image.jpg'

export const CertificateListItem = () => {
  return (
    <li className="certificates__card">
        <a href="some" className="certificates__card_image ">
            <picture>
                <img src={SertificateImg} alt="certificate ph" width="299" height="423" loading="lazy"/>
            </picture>
        </a>
        <a href="some" className="certificates__card_name">
            Санитарно-эпидемиологическое
            заключение (СЭС)
        </a>
    </li>
  )
}
