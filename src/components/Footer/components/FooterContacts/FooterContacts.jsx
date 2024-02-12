import React from 'react'

export const FooterContacts = () => {
  return (
    <div className="footer__contacts">
        <h2>Контакти</h2>
        
        <ul>
            <li>
                <a href="mailto:navchalne.sales@gmail.com">
                    navchalne.sales@gmail.com
                </a>
            </li>
            <li>
                <a href="mailto:sales@for-school.com.ua">
                    sales@for-school.com.ua
                </a>
            </li>
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
