import React, { useContext, useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";

import AboutPh from "../../assets/img/about-us/about-us-image.png";
import { MainReviews } from "../Main/components/MainReviews/MainReviews";
import { useLocation } from "react-router-dom";
import { PopupContext } from "../../App";
import getCookies from "../../functions/getCookies";
import { useTranslation } from "react-i18next";
import { getLocalizedText } from "../../utils/getLocalizedText";
import { useSelector } from "react-redux";

export const AboutUs = () => {
  const SetPopContext = useContext(PopupContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { t, i18n } = useTranslation();

  const location = useLocation();

  const scrollToSection = () => {
    if (!location.hash) return;

    const targetElement = document.querySelector(location.hash);

    const scrollOptions = {
      behavior: "smooth",
      block: "start",
    };

    targetElement.scrollIntoView(scrollOptions);
  };

  const handleNavPopupThx = () => {
    SetPopContext("thx");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      phone: phone,
      name: name,
    };

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(getApiLink("/api/consultation/create-request"), dataToSend, {
        headers: GetApiHeaders(),
      })
      .then(({ data }) => {
        handleNavPopupThx();

        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setTimeout(scrollToSection, 1);
  }, [location]);

  const [textAbout, setTextAbout] = useState("");
  const [textDelivery, setTextDelivery] = useState("");
  const [textPayment, setTextPayment] = useState("");

  const staticData = useSelector((state) => state.toolkit.staticData);
  useEffect(() => {
    if (!staticData) return;

    setTextAbout(getLocalizedText(staticData, i18n.language, "about_us"));
    setTextDelivery(getLocalizedText(staticData, i18n.language, "delivery"));
    setTextPayment(getLocalizedText(staticData, i18n.language, "payment"));
  }, [i18n.language, staticData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hash = location.hash.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Задержка в мс

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* <BackGroundDecor/> */}

      <BreadCrumbs pages={[{ page: t("menu_point_1") }]} />

      <section className="about-us container">
        <div className="about-us__decor" aria-hidden="true">
          <picture>
            <img
              src="img/decor-element.png"
              alt=""
              width="0"
              height="0"
              loading="lazy"
            />
          </picture>
        </div>
        <SectionTitle
          title={t("menu_point_1")}
          ClassTitle={"about-us__title"}
        />
        <div className="about-us__wrapper">
          <div className="about-us__aside" data-sticky-container>
            <nav className="about-us__aside_nav sticky" data-margin-top="30">
              <ul>
                <li>
                  {/*onClick={handleSmoothScroll}*/}
                  <a href="#about-us">{t("about_us_title")}</a>
                </li>
                <li>
                  {/*onClick={handleSmoothScroll}*/}
                  <a href="#deliv">{t("shiping_title")}</a>
                </li>
                <li>
                  {/*onClick={handleSmoothScroll}*/}
                  <a href="#payment">{t("payment_title")}</a>
                </li>
                <li>
                  {/*onClick={handleSmoothScroll}*/}
                  <a href="#consultation">{t("consultation_title")}</a>
                </li>
                <li>
                  {/*onClick={handleSmoothScroll}*/}
                  <a href="#reviews">{t("reviews")}</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="about-us__main">
            <div className="about-us__content">
              <article id="about-us">
                <h3>{t("about_us_title")}</h3>
                <div className="about-us__content_row">
                  <div className="about-us__content_col">
                    <p>{textAbout ?? ""}</p>
                  </div>
                  <div className="about-us__content_col">
                    <picture className="image-aspect-ratio">
                      <img
                        src={AboutPh}
                        alt=""
                        width="482"
                        height="482"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </article>

              <article id="deliv">
                <h3>{t("shiping_title")}</h3>
                <p>{textDelivery ?? ""}</p>
              </article>

              <article id="payment">
                <h3>{t("payment_title")}</h3>
                <p>{textPayment ?? ""}</p>
              </article>
            </div>
            <div
              className="about-us__consultation consultation"
              id="consultation"
            >
              <div className="consultation__body">
                <h3 className="consultation__title title">
                  {t("menu_point_4")}
                </h3>
                <div className="consultation__text">
                  <p>{t("enter_data_to_phone")}</p>
                </div>
                <form
                  className="consultation__form"
                  onSubmit={handleFormSubmit}
                >
                  <label className="input-label">
                    <input
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder={t("name_title")}
                      required
                    />
                  </label>
                  <label className="input-label">
                    <input
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      name="phone"
                      placeholder={t("phone_title")}
                      required
                    />
                  </label>
                  <button type="submit" className="button is-mode-1">
                    {t("send_title")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <MainReviews id="reviews" />
      </section>
    </>
  );
};
