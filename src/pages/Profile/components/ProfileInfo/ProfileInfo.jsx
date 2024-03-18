import React from 'react'

export const ProfileInfo = ({ userData }) => {
  return (
    <>
        <div className="account__block">
            <div className="account__block_header">
                <h3 className="account__block_title min-title">
                    Личные данные
                </h3>
                <button type="button" className="account__block_edit" title="Редактировать">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#edit"></use>
                    </svg>
                </button>
            </div>
            <div className="account__block_wrapper">
                <div className="account__block_group">
                    <label className="account__block_item">
                        <span>ФИО Директора</span>
                        <span className="value">{userData.name}</span>
                    </label>
                    <label className="account__block_item">
                        <span>Название организации</span>
                        <span className="value">Игорь Иванович</span>
                    </label>
                    <label className="account__block_item">
                        <span>E-mail *</span>
                        <span className="value">sdfkjh@gmail.com</span>
                    </label>
                    <label className="account__block_item">
                        <span>Код ЄДРПОУ/ІПН</span>
                        <span className="value">5988898656</span>
                    </label>
                    <label className="account__block_item">
                        <span>Телефон *</span>
                        <span className="value">+38 (099) 440 33 43</span>
                    </label>
                    <label className="account__block_item">
                        <span>ФИО Контактного лица</span>
                        <span className="value">Игорь Иванович</span>
                    </label>
                </div>
                <div className="account__block_group">
                    <label className="account__block_item">
                        <span>ФИО Директора</span>
                        <span className="input-label">
                            <input type="text" name="name-director" placeholder="Введите имя директора" defaultValue="Игорь Иванович" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>Название организации</span>
                        <span className="input-label">
                            <input type="text" name="company-name" placeholder="Введите название организации" defaultValue="Игорь Иванович" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span className="is-required">E-mail</span>
                        <span className="input-label">
                            <input type="email" name="email" placeholder="Введите email" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>Код ЄДРПОУ/ІПН</span>
                        <span className="input-label">
                            <input type="text" name="code" placeholder="Введите код ЄДРПОУ/ІПН" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span className="is-required">Телефон</span>
                        <span className="input-label">
                            <input type="tel" name="phone" placeholder="Введите номер телефона" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>ФИО Контактного лица</span>
                        <span className="input-label">
                            <input type="text" name="contact-name" placeholder="Введите имя контактного лица" required className="input"/>
                        </span>
                    </label>
                    <div className="account__block_footer">
                        <button className="button is-mode-1">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#save"></use>
                            </svg>
                            <span>Сохранить</span>
                        </button>
                        <button className="button is-mode-2">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#cancel"></use>
                            </svg>
                            <span>Отменить</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="account__block">
            <div className="account__block_header">
                <h3 className="account__block_title min-title">
                    Адрес доставки
                </h3>
                <button type="button" className="account__block_edit" title="Редактировать">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#edit"></use>
                    </svg>
                </button>
            </div>
            <div className="account__block_wrapper">
                <div className="account__block_group">
                    <label className="account__block_item">
                        <span>ФИО Директора</span>
                        <span className="value">Ул. Рокоссовского 33, г. Чернигов</span>
                    </label>
                    <label className="account__block_item">
                        <span>Название организации</span>
                        <span className="value">Игорь Иванович</span>
                    </label>
                    <label className="account__block_item">
                        <span>E-mail *</span>
                        <span className="value">ул. Всехсвятская 17, Отделение №19</span>
                    </label>
                    <label className="account__block_item">
                        <span>Код ЄДРПОУ/ІПН</span>
                        <span className="value">+38 (095) 704 08 87</span>
                    </label>
                </div>
                <div className="account__block_group">
                    <label className="account__block_item">
                        <span>Адрес</span>
                        <span className="input-label">
                            <input type="text" name="address" placeholder="Введите адрес" defaultValue="Ул. Рокоссовского 33, г. Чернигов" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>ФИО Получателя</span>
                        <span className="input-label">
                            <input type="text" name="receiver-name" placeholder="Введите имя получателя" defaultValue="Игорь Иванович" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>Отделение Новой Почты</span>
                        <span className="input-label">
                            <input type="text" name="new-post-address" placeholder="Введите отделение Новой Почты" required className="input"/>
                        </span>
                    </label>
                    <label className="account__block_item">
                        <span>Телефон получателя</span>
                        <span className="input-label">
                            <input type="tel" name="receiver-phone" placeholder="Введите номер телефона" required className="input"/>
                        </span>
                    </label>
                    <div className="account__block_footer">
                        <button className="button is-mode-1" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#save"></use>
                            </svg>
                            <span>Сохранить</span>
                        </button>
                        <button className="button is-mode-2" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#cancel"></use>
                            </svg>
                            <span>Отменить</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="account__block">
            <div className="account__block_header">
                <h3 className="account__block_title min-title">
                    Настройки аккаунта
                </h3>
            </div>
            <div className="account__block_wrapper">
                <div className="account__block_group">
                    <a href="some" className="account__change_password button is-mode-2" aria-label="Изенить пароль">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use xlinkHref="#edit-2"></use>
                        </svg>
                        <span>Изенить пароль</span>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}
