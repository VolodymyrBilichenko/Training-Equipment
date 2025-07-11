import React, { useEffect, useRef } from 'react'
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const CertificateList = ({ sertificatData }) => {

  const Fancybox = (props) => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
  
      const delegate = props.delegate || "[data-fancybox]";
      const options = props.options || {};
  
      NativeFancybox.bind(container, delegate, options);
  
      return () => {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      };
    });
  
    return <div ref={containerRef}>{props.children}</div>;
  }
  

  return (
    <Fancybox
        options={{
          Carusel: {
            infinite: false,
          },
        }}
      >
      <div className="certificates__list">

        {sertificatData.map((sertificate) => (
          <div className='certificates__card' key={sertificate.id}>
            <a href={sertificate.files[0].web_path} className="certificates__card_image" data-fancybox="gallery">
              <img src={sertificate.files[0].web_path} alt="certificate ph" loading="lazy"/>
            </a>
            <span className="certificates__card_name">
                {sertificate.description}
            </span>
          </div>
        ))}

        

      </div>
    </Fancybox>
  )
}
