import { useState } from 'react';
import './assets/js/main'
import { routes } from './routes/routes'
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [routesList] = useState(routes())

  return (
    <>
      <Routes>
        {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
      </Routes>
      <h1>Start Training Equipment</h1>
    </>
  );
}
