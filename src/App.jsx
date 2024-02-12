import { useState } from 'react';
import './assets/js/main'
import './assets/scss/style.scss'
import { routes } from './routes/routes'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sprite } from './components/IconSprite/Sprite';

export const App = () => {
  const [routesList] = useState(routes())

  return (
    <>
      <Sprite/>
    
      <Header/>

      <Routes>
        {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
      </Routes>
    </>
  );
}
