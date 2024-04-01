import React from 'react'

export const FooterSocial = ({socialData}) => {

    const socFacebook = socialData.filter(item => item.key === 'facebook')
    const socViber = socialData.filter(item => item.key === 'viber')
    const socTelegram = socialData.filter(item => item.key === 'telegram')
    const socYoutube = socialData.filter(item => item.key === 'youtube')
    const socInstagram = socialData.filter(item => item.key === 'instagram')


  return (
    <div className="footer__social">
        <ul>
            <li>
                <a href={socFacebook.length > 0 && socFacebook[0].value} title="Facebook" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#facebook"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href={ socInstagram.length > 0 && socInstagram[0].value} title="Instagram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#instagram"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href={ socYoutube.length > 0 && socYoutube[0].value} title="YouTube" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#youtube"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href={ socViber.length > 0 && socViber[0].value} title="Viber" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#viber"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href={ socTelegram.length > 0 && socTelegram[0].value} title="Telegram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#telegram"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
  )
}
