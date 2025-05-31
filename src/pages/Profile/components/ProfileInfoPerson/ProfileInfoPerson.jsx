import React, { useEffect, useState } from "react";
import axios from "axios";
import { getApiLink } from "../../../../api/getApiLink";
import { GetApiHeaders } from "../../../../functions/getApiHeaders";
import getCookies from "../../../../functions/getCookies";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ProfileInfoPerson = () => {
  const { t } = useTranslation();

  const userData = useSelector((state) => state.toolkit.user);

  const [isAnimate, setIsAnimate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [documentCode, setDocumentCode] = useState("");
  const [phone, setPhone] = useState("");
  const [headMasterName, setHeadMasterName] = useState("");

  useEffect(() => {
    setName(userData?.name);
    setEmail(userData?.email);
    setOrganizationName(userData?.organization?.name);
    setDocumentCode(userData?.organization?.document_code);
    setPhone(userData?.phone_number);
    setHeadMasterName(userData?.organization?.contact_person);
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
      email: email,
      name: name,
      phone_number: phone,
      organization: {
        name: organizationName,
        document_code: +documentCode,
        contact_person: headMasterName,
      },
    };

    organizationName === userData?.organization?.name &&
      delete dataBody?.organization?.name;
    documentCode === userData?.organization?.document_code &&
      delete dataBody?.organization?.document_code;
    headMasterName === userData?.organization?.contact_person &&
      delete dataBody?.organization?.contact_person;

    if (
      organizationName === userData?.organization?.name &&
      documentCode === userData?.organization?.document_code &&
      headMasterName === userData?.organization?.contact_person
    ) {
      delete dataBody.organization;
    }

    phone === userData.phone_number && delete dataBody.phone_number;
    name === userData.name && delete dataBody.name;
    email === userData.email && delete dataBody.email;
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
        <h3 className="account__block_title min-title">{t("personal_info")}</h3>
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
              <span>{t("FIO_director")}</span>
              <span className="value">{headMasterName ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("organization_name")}</span>
              <span className="value">{organizationName ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>E-mail *</span>
              <span className="value">{email ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("code_edrpu")}</span>
              <span className="value">{documentCode ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("phone_title")} *</span>
              <span className="value">{phone ?? "–"}</span>
            </label>
            <label className="account__block_item">
              <span>{t("personal_fio")}</span>
              <span className="value">{name ?? "–"}</span>
            </label>
          </div>
        ) : (
          <form
            onSubmit={handleChangeUserInfo}
            className="account__block_group"
            style={{ opacity: isAnimate ? 0 : 1 }}
          >
            <label className="account__block_item">
              <span>{t("FIO_director")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="name-director"
                  placeholder={t("enter_FIO_director")}
                  value={headMasterName}
                  onChange={(e) => setHeadMasterName(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("organization_name")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="company-name"
                  placeholder={t("enter_organization_name")}
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span className="is-required">E-mail</span>
              <span className="input-label">
                <input
                  type="email"
                  name="email"
                  placeholder={t("enter_email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("code_edrpu")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="code"
                  placeholder={t("enter_code_edrpu")}
                  value={documentCode}
                  onChange={(e) => setDocumentCode(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span className="is-required">{t("phone_title")}</span>
              <span className="input-label">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("enter_phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="input"
                />
              </span>
            </label>
            <label className="account__block_item">
              <span>{t("personal_fio")}</span>
              <span className="input-label">
                <input
                  type="text"
                  name="contact-name"
                  placeholder={t("enter_personal_fio")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                />
              </span>
            </label>
            <div className="account__block_footer">
              <button className="button is-mode-1" type={"submit"}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#save"></use>
                </svg>
                <span>{t("save")}</span>
              </button>
              <button
                onClick={handleEdit}
                type={"button"}
                className="button is-mode-2"
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

export default ProfileInfoPerson;
