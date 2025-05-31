import React, { useEffect, useState } from "react";
import axios from "axios";
import getCookies from "../../../../functions/getCookies";
import { getApiLink } from "../../../../api/getApiLink";
import { GetApiHeaders } from "../../../../functions/getApiHeaders";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ProfileInfoAddress = () => {
  const { t } = useTranslation();

  const userData = useSelector((state) => state.toolkit.user);

  const [isAnimate, setIsAnimate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [deliveryBox, setDeliveryBox] = useState("");

  useEffect(() => {
    setDeliveryName(userData?.address_delivery?.full_name);
    setDeliveryAddress(userData?.address_delivery?.address_line);
    setDeliveryPhone(userData?.address_delivery?.phone_number);
    setDeliveryBox(userData?.address_delivery?.po_box);
  }, [userData]);

  const handleEdit = () => {
    setIsAnimate(true);

    setTimeout(() => {
      setIsEdit((prev) => !prev);

      setTimeout(() => {
        setIsAnimate(false);
      }, 10);
    }, 350);
  };

  const handleChangeUserInfo = (e) => {
    e.preventDefault();

    const dataBody = {
      address_delivery: {
        address_line: deliveryAddress,
        po_box: deliveryBox,
        full_name: deliveryName,
        phone_number: deliveryPhone,
      },
    };

    delete dataBody.updated_at;
    delete dataBody.created_at;
    delete dataBody.id;

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .put(getApiLink("/api/user/update"), dataBody, {
        headers: GetApiHeaders(),
      })
      .then(({ data }) => {
        handleEdit();
      })
      .catch((er) => toast.error(t("something_was_happen")));
  };

  return (
    <div className={`account__block ${isEdit && "is-editing"}`}>
      <div className="account__block_header">
        <h3 className="account__block_title min-title">
          {t("delivery_address")}
        </h3>
        <button
          onClick={handleEdit}
          type="button"
          className="account__block_edit"
          title={t("edit")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#edit"></use>
          </svg>
        </button>
      </div>
      <div className="account__block_wrapper">
        {!isEdit ? (
          <div
            className="account__block_group"
            style={{ opacity: isAnimate ? 0 : 1 }}
          >
            <label className="account__block_item">
              <span>{t("address")}</span>
              <span className="value">{deliveryAddress ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("reciever_fio")}</span>
              <span className="value">{deliveryName ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("nova_post_number")}</span>
              <span className="value">{deliveryBox ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("receiver_phone")}</span>
              <span className="value">{deliveryPhone ?? "–"}</span>
            </label>
          </div>
        ) : (
          <form
            onSubmit={handleChangeUserInfo}
            className="account__block_group"
            style={{ opacity: isAnimate ? 0 : 1 }}
          >
            <label className="account__block_item">
              <span>{t("address")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="address"
                  placeholder={t('enter_address')}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  required
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("reciever_fio")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="receiver-name"
                  placeholder={t('enter_receiver_fio')}
                  value={deliveryName}
                  onChange={(e) => setDeliveryName(e.target.value)}
                  required
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("nova_post_number")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="new-post-address"
                  placeholder={t('enter_nove_post_number')}
                  value={deliveryBox}
                  onChange={(e) => setDeliveryBox(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("receiver_phone")}</span>
              <span className="input-label">
                <input
                  type="tel"
                  name="receiver-phone"
                  placeholder={t('enter_phone')}
                  value={deliveryPhone}
                  onChange={(e) => setDeliveryPhone(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <div className="account__block_footer">
              <button className="button is-mode-1" type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#save"></use>
                </svg>
                <span>{t("save")}</span>
              </button>
              <button
                onClick={handleEdit}
                className="button is-mode-2"
                type="button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#cancel"></use>
                </svg>
                <span>{t("cancel")}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileInfoAddress;
