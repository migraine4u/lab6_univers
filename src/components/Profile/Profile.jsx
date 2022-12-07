import React from 'react';
import './Profile.scss';
const Profile = () => {
    return (
        <div className="profile">
            <h3>Мой профиль</h3>
            <div className="profile__form">
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="ФИО*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Город*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Эл.почта*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Пароль*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Контактный телефон*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Планируемый год поступления*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Цель*"
                ></input>
                <input
                    className="profile__form__input"
                    type="text"
                    placeholder="Основа обучения*"
                ></input>
                <button className="profile__form__button">Сохранить</button>
            </div>
        </div>
    );
};

export default Profile;
