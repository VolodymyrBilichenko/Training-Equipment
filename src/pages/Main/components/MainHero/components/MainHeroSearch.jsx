import React from 'react'

export const MainHeroSearch = ({searchPlaceholder}) => {
  return (
    <search className="index-hero__search">
        <form className="index-hero__search--form" method="post">
            <label>
                <input type="search" name="search" placeholder={searchPlaceholder}/>
            </label>
            <button type="submit" title="Пошук">
                <svg width="26" height="26" viewBox="0 0 48 48">
                    <use xlinkHref="#search"></use>
                </svg>
            </button>
        </form>
    </search>
  )
}
