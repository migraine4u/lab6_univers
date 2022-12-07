import React from 'react';
import './Help.scss';

const Help = ({ setHelp }) => {
    return (
        <div className="help">
            <div className="help__form">
                <h3>Нужна помощь?</h3>
                <div className="help__form__content">
                    <h5>Тема</h5>
                    <input type="text" />
                    <h5>Что случилось?</h5>
                    <input type="text" />
                    <button onClick={() => setHelp(false)}>Отправить</button>
                    <h4>ИЛИ</h4>
                    <h5>Напишите нам:</h5>
                    <p>example@mail.ru</p>
                    <p>+79XXXXXXXXX</p>
                </div>
            </div>
        </div>
    );
};

export default Help;
