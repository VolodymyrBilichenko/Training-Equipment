import React, { useContext } from "react";
import { PopupContext } from "../App";

export const ModalConfirm = ({ handleClosePopUp }) => {
  const SetPopContext = useContext(PopupContext);

  return (
    <div className="popup-wrapper">
      <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
      <div className="popup-body">
        <button
          type="button"
          onClick={handleClosePopUp}
          className="popup-close-btn popup-close"
          title="Закрити"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">Спасибо</h2>
          <div className="popup-text">
            <p>Ваша почта подтверждена</p>
          </div>
          <br />
          <button
            onClick={handleClosePopUp}
            style={{ display: "block", margin: "0 auto" }}
            className="popup-form__submit button is-mode-1"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
