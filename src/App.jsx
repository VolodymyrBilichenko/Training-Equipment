import { useState } from 'react';
import './assets/js/main'
import './assets/scss/style.scss'
import { routes } from './routes/routes'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sprite } from './components/IconSprite/Sprite';
import { Footer } from './components/Footer/Footer';
import { LoginPopUp } from './components/LoginPopUp/LoginPopUp';

export const App = () => {
  const [routesList] = useState(routes())

  return (
    <>
      <Sprite/>
    
      <Header/>

      <div className='main'>
        <Routes>
          {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
        </Routes>
      </div>

      <Footer/>

      <LoginPopUp/>
    </>
  );
}
