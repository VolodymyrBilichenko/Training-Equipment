import React from 'react'
import { HeaderMessage } from './components/HeaderMessage/HeaderMessage'
import { HeaderPanel } from './components/HeaderPanel/HeaderPanel'
import { HeaderMain } from './components/HeaderMain/HeaderMain'

export const Header = () => {
  return (
    <div className="wrapper">
		<header className="header">
            
            <HeaderMessage/>

			<HeaderPanel/>

			<HeaderMain/>
		</header>
    </div>
  )
}
