import React from 'react'

export const FooterSocial = () => {
  return (
    <div className="footer__social">
        <ul>
            <li>
                <a href="foo" title="Facebook" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#facebook"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="foo" title="Instagram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#instagram"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="foo" title="YouTube" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#youtube"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="foo" title="Viber" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#viber"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="foo" title="Telegram" target="_blank">
                    <svg width="26" height="26" viewBox="0 0 26 26">
                        <use xlinkHref="#telegram"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
  )
}
