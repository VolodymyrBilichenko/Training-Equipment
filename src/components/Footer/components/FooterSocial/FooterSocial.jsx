import React from 'react'

export const FooterSocial = ({socialData}) => {

    const socFacebook = socialData?.find(item => item.key === 'facebook')
    const socViber = socialData?.find(item => item.key === 'viber')
    const socTelegram = socialData?.find(item => item.key === 'telegram')
    const socYoutube = socialData?.find(item => item.key === 'youtube')
    const socInstagram = socialData?.find(item => item.key === 'instagram')


  return (
    <div className="footer__social">
        <ul>
            {socFacebook?.value && <li>
                <a href={socFacebook?.value} title="Facebook" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#facebook"></use>
                    </svg>
                </a>
            </li>}
            {socInstagram?.value && <li>
                <a href={socInstagram?.value} title="Instagram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#instagram"></use>
                    </svg>
                </a>
            </li>}
            {socYoutube?.value && <li>
                <a href={socYoutube?.value} title="YouTube" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#youtube"></use>
                    </svg>
                </a>
            </li>}
            {socViber?.value && <li>
                <a href={socViber?.value} title="Viber" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#viber"></use>
                    </svg>
                </a>
            </li>}
            {socTelegram?.value && <li>
                <a href={socTelegram?.value} title="Telegram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#telegram"></use>
                    </svg>
                </a>
            </li>}
        </ul>
    </div>
  )
}
