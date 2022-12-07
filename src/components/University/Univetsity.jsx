// import { useNavigate } from 'react-router-dom';

import './University.scss';

import { ReactComponent as PicSvg } from '../../assets/picture.svg';

const Univetsity = ({ univer, onClickItem }) => {
    // let navigate = useNavigate();

    return (
        <div className="univer">
            <div className="univer__photo">
                <PicSvg />
            </div>
            <div className="univer__info">
                <div className="univer__info__country">
                    <p>Страна: {univer.country}</p>
                </div>
                <div className="univer__info__name">
                    <p>{univer.institution}</p>
                </div>
                <div className="univer__info__desc">
                    <p>Всемирный рейтинг: {univer.world_rank}</p>
                </div>
                <button className="univer__info__button" onClick={onClickItem}>
                    Подробнее
                </button>
            </div>
            <div className="univer__exam">
                <div className="univer__exam__inform">
                    <p>Национальный рейтинг: {univer.national_rank}</p>
                </div>
                <div className="univer__exam__inform">
                    <p>Качество образования: {univer.quality_of_education}</p>
                </div>
                <div className="univer__exam__inform">
                    <p>Общая оценка: {univer.score}</p>
                </div>
            </div>
        </div>
    );
};

export default Univetsity;
