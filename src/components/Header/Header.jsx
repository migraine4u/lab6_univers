import { useNavigate } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as LogoutSvg } from '../../assets/logout.svg';

const Header = ({ setOpen }) => {
    let navigate = useNavigate();

    return (
        <div className="header">
            <div className="header__logo" onClick={() => navigate(`/`)}>
                <h2>UNIVERS</h2>
                <h3>Помощник абитуриента</h3>
            </div>
            <div className="header__nav">
                <div
                    className="header__nav__main"
                    onClick={() => navigate(`/`)}
                >
                    <h4>Главная</h4>
                </div>
                <div className="header__nav__news">
                    <h4>Новости</h4>
                </div>
                <div
                    className="header__nav__cabinet"
                    onClick={() => navigate(`/account`)}
                >
                    <h4>Личный кабинет</h4>
                </div>
            </div>
            <div className="header__search">
                <input
                    className="header__search__input"
                    type="text"
                    placeholder="Поиск по сайту"
                ></input>
                <div
                    className="header__search__login"
                    onClick={() => setOpen(true)}
                >
                    <p>USERNAME</p>
                    <LogoutSvg />
                </div>
            </div>
        </div>
    );
};

export default Header;
