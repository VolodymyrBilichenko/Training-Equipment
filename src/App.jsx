import { createContext, useEffect, useState } from "react";
import "./assets/js/main";
import "./assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes/routes";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Sprite } from "./components/IconSprite/Sprite";
import { Footer } from "./components/Footer/Footer";
import { Modals } from "./components/Modals/Modals";
import { useGetBeginerAPIs } from "./hooks/getBeginerAPIs";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import { ToastContainer } from "react-toastify";
import { BackGroundDecor } from "./components/BackGroundDecor/BackGroundDecor";
import ArrowLoader from './assets/img/loader.svg'

export const PopupContext = createContext(null);

export const App = () => {
  const location = useLocation();
  const [routesList] = useState(routes());
  const [modal, setModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname.includes("confirm")) setModal("confirm");


    window.onload = () => {
      setIsLoading(false)
    }

  }, [location]);

  const _ = useGetBeginerAPIs();

  const nonDecorationPages = ["/confirm"];

  return (
    <>
      
      <TransitionGroup>
            <CSSTransition
              key={isLoading}
              // classNames={!location.pathname.includes("/catalog/") ? "fade" : "catalog-fade"}
              classNames={"fade"}
              timeout={300}
            >
              {isLoading ? <div className="catalog__loader loader" >
            <div className="catalog__loader_block">
                <img src={ArrowLoader} width="53" height="53" alt=""/>
                <span>Loading...</span>
            </div>
        </div> : <></>}
            </CSSTransition>
          </TransitionGroup>


      <Sprite />

      <PopupContext.Provider value={setModal}>
        <Header />

        <div className="main">
          {location.pathname !== "/" &&
            !nonDecorationPages.some((item) =>
              location.pathname.includes(item)
            ) && <BackGroundDecor />}

          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              // classNames={!location.pathname.includes("/catalog/") ? "fade" : "catalog-fade"}
              classNames={"fade"}
              timeout={300}
            >
              <main>
                <Routes location={location}>
                  {routesList.map((route) => (
                    <Route
                      key={route.path}
                      element={route.element}
                      path={route.path}
                    />
                  ))}
                </Routes>
              </main>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <Footer />

        <Modals modal={modal} />

        <ToastContainer />
      </PopupContext.Provider>
    </>
  );
};
