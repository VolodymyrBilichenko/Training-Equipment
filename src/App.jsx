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

export const PopupContext = createContext(null);

export const App = () => {
  const location = useLocation();
  const [routesList] = useState(routes());
  const [modal, setModal] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const _ = useGetBeginerAPIs();

  return (
    <>
      <Sprite />

      <PopupContext.Provider value={setModal}>
        <Header />

        <div className="main">
          {location.pathname !== "/" && <BackGroundDecor />}

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
