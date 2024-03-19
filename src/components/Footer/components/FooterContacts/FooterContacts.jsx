import React from 'react'

export const FooterContacts = ({ socialData }) => {
    const socMail = socialData.filter(item => item.key === 'email')

  return (
    <div className="footer__contacts">
        <h2>Контакти</h2>
        
        <ul>
            {socMail.map(mail => (
                <li key={mail.id}>
                    <a href={`mailto:${mail.value}`}>
                        {mail.value}
                    </a>
                </li>
            ))}
        </ul>
        <ul>
            <li className="footer__contacts_margin">
                <a href="foo">
                    Украина, Чернигов
                    Ул. Старобелоусская, 63
                </a>
            </li>
        </ul>
    </div>
  )
}
