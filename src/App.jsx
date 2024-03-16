import { createContext, useState } from 'react';
import './assets/js/main'
import './assets/scss/style.scss'
import { routes } from './routes/routes'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sprite } from './components/IconSprite/Sprite';
import { Footer } from './components/Footer/Footer';
import { LoginPopUp } from './components/LoginPopUp/LoginPopUp';
// import { RegisterPopUp } from './components/RegisterPopUp/RegisterPopUp';

export const PopupContext = createContext(null);

export const App = () => {
  const [routesList] = useState(routes())
  const [modal, setModal] = useState('');

  console.log(modal);

  // const ModalList = {
  //   'login': <LoginPopUp/>,
  //   'register': <RegisterPopUp/>,
  // }

  const ModalList = () => {
    if (modal === 'login') {
      return <LoginPopUp modal={modal}/>
    }
  }

  console.log(ModalList);

  return (
    <>
      <Sprite/>
      
      <PopupContext.Provider value={setModal}>

        <Header/>

        <div className='main'>
          <Routes>
            {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
          </Routes>
        </div>

        <Footer/>

        {/* <LoginPopUp modal={modal}/> */}
        {ModalList()}

        {/* <RegisterPopUp/> */}
      </PopupContext.Provider>

    </>
  );
}
