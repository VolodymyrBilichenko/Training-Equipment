import React from "react";
import { NavLink } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";

import Decor from "../../assets/img/decor-hero-background.png";

export const Docs = () => {
  return (
    <div className="main">
      <div
        className="main__background"
        style={{ backgroundImage: `url(${Decor})`, paddingTop: "24%" }}
        aria-hidden="true"
      ></div>

      <BreadCrumbs pages={[{ page: "Обработка личных данных" }]} />

      <section className="not-found docs-col container">
        <div className="not-found__col">
          <h2 className="not-found__title section-title">
            Обработка личных данных
          </h2>
          <section id="personal-data">
            <h2>Обработка персональных данных</h2>

            <p>
              Настоящим пользователь подтверждает, что, предоставляя свои
              персональные данные на данном сайте, он дает согласие на их
              обработку в соответствии с Законом Украины «О защите персональных
              данных», а также другими нормативно-правовыми актами,
              регулирующими защиту конфиденциальной информации.
            </p>

            <h3>1. Цель обработки персональных данных</h3>
            <p>
              Персональные данные пользователя собираются и обрабатываются с
              целью:
            </p>
            <ul>
              <li>идентификации пользователя на сайте;</li>
              <li>
                обработки заказов, заявок, обращений и других действий,
                связанных с использованием сервисов сайта;
              </li>
              <li>
                предоставления качественного обслуживания и улучшения
                функциональности сайта;
              </li>
              <li>
                осуществления обратной связи, включая направление уведомлений,
                информации, запросов и предложений;
              </li>
              <li>
                выполнения обязательств, вытекающих из договорных отношений
                между пользователем и администрацией сайта;
              </li>
              <li>
                отправки рекламных, информационных и маркетинговых материалов (в
                случае отдельного согласия пользователя);
              </li>
              <li>проведения статистических и маркетинговых исследований.</li>
            </ul>

            <h3>2. Состав персональных данных</h3>
            <p>
              В рамках использования сайта могут обрабатываться следующие
              персональные данные пользователя:
            </p>
            <ul>
              <li>фамилия, имя, отчество;</li>
              <li>
                контактные данные (номер телефона, адрес электронной почты,
                почтовый адрес и др.);
              </li>
              <li>сведения о заказах, покупках, обращениях;</li>
              <li>
                IP-адрес, информация о браузере и устройстве, cookie-файлы,
                история посещений сайта и др.
              </li>
            </ul>

            <h3>3. Хранение и защита данных</h3>
            <p>
              Администрация сайта принимает все необходимые организационные и
              технические меры для защиты персональных данных пользователя от
              несанкционированного или случайного доступа, уничтожения,
              изменения, блокирования, копирования, распространения, а также от
              иных неправомерных действий третьих лиц.
            </p>
            <p>
              Срок хранения персональных данных ограничивается сроком,
              необходимым для достижения целей их обработки, если иное не
              предусмотрено законодательством.
            </p>

            <h3>4. Передача персональных данных третьим лицам</h3>
            <p>
              Персональные данные могут передаваться третьим лицам только в
              следующих случаях:
            </p>
            <ul>
              <li>с согласия пользователя;</li>
              <li>
                при передаче информации партнёрам и подрядчикам, задействованным
                в предоставлении услуг (например, службе доставки);
              </li>
              <li>по законному требованию государственных органов.</li>
            </ul>

            <h3>5. Права пользователя</h3>
            <p>Пользователь имеет право:</p>
            <ul>
              <li>
                получить информацию о своих персональных данных, обрабатываемых
                администрацией сайта;
              </li>
              <li>
                требовать изменения, уточнения или удаления своих персональных
                данных;
              </li>
              <li>
                отозвать своё согласие на обработку персональных данных в любой
                момент, направив соответствующий запрос;
              </li>
              <li>
                обжаловать действия или бездействие администрации сайта,
                связанные с обработкой персональных данных, в уполномоченные
                органы или суд.
              </li>
            </ul>

            <h3>6. Изменения в политике обработки персональных данных</h3>
            <p>
              Администрация сайта оставляет за собой право вносить изменения в
              настоящую Политику без предварительного уведомления. Актуальная
              версия документа всегда доступна на сайте.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};
