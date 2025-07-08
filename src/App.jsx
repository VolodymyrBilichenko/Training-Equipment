import { createContext, useEffect, useRef, useState } from "react";
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
  SwitchTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import { toast, ToastContainer } from "react-toastify";
import { BackGroundDecor } from "./components/BackGroundDecor/BackGroundDecor";
import ArrowLoader from "./assets/img/loader.svg";
import axios from "axios";
import { getApiLink } from "./api/getApiLink";
import { GetApiHeaders } from "./functions/getApiHeaders";
import { useDispatch } from "react-redux";
import { setSettings } from "./redux/toolkitSlice";

export const PopupContext = createContext(null);

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [routesList] = useState(routes());
  const [modal, setModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname.includes("confirm")) setModal("confirm");

    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 150);
    };
  }, [location]);

  useEffect(() => {
    axios
      .get(getApiLink("/api/static/data"), { headers: GetApiHeaders() })
      .then(({ data }) => {
        dispatch(setSettings(data.data));
      })
      .catch((error) => {
        toast.error("Возникла неизведанная ошибка");
      });
  }, []);

  const _ = useGetBeginerAPIs();

  const nonDecorationPages = ["/confirm"];

  const nodeRef = useRef(null);

  return (
    <>
      {isLoading ? (
        <div className="catalog__loader loader">
          <div className="catalog__loader_block">
            <img src={ArrowLoader} width="53" height="53" alt="" />
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Sprite />

      <PopupContext.Provider value={setModal}>
        <Header />

        <div className="main">
          {location.pathname !== "/" &&
            !nonDecorationPages.some((item) =>
              location.pathname.includes(item)
            ) && <BackGroundDecor />}

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={150}
              classNames="fade"
              unmountOnExit
            >
              <main ref={nodeRef}>
                <Routes location={location}>
                  {routesList.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </main>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <Footer />

        <Modals modal={modal} />

        <ToastContainer />
      </PopupContext.Provider>
    </>
  );
};
