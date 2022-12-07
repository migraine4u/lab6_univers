import { useNavigate, useLocation } from 'react-router-dom';

import './Cabinet.scss';

import Profile from '../Profile/Profile';
import Professions from '../Professions/Professions';

const Cabinet = () => {
    let navigate = useNavigate();
    let location = useLocation();
    return (
        <div className="cabinet">
            <div className="cabinet__header">
                <h3
                    onClick={() => {
                        navigate(`/account`);
                    }}
                >
                    Профиль
                </h3>
                <h3>Программы</h3>
                <h3>Учебные заведения</h3>
                <h3>Специальности</h3>
                <h3
                    onClick={() => {
                        navigate(`/account/profs`);
                    }}
                >
                    Профессии
                </h3>
                <h3>Сервисы</h3>
            </div>
            <div className="cabinet__container">
                {location.pathname == '/account/profs' ? (
                    <Professions />
                ) : (
                    <Profile />
                )}
            </div>
        </div>
    );
};

export default Cabinet;
