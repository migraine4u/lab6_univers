import React from 'react';
import './UniverPage.scss';

import { ReactComponent as PicSvg } from '../../assets/picture.svg';

const UniverPage = ({ univer }) => {
    return (
        <div className="univerPage">
            <div className="univerPage__content">
                <div className="univerPage__content__photo">
                    <PicSvg />
                </div>
                <div className="univerPage__content__info">
                    <div className="univerPage__content__info__country">
                        <p>{univer.country}</p>
                    </div>
                    <div className="univerPage__content__info__name">
                        <p>{univer.institution}</p>
                    </div>
                    <div className="univerPage__content__info__desc">
                        <p>Всемирный рейтинг: {univer.world_rank}</p>
                    </div>
                </div>
            </div>
            <div className="univerPage__exam">
                <div className="univerPage__exam__inform">
                    <h4>Средний балл для поступления: -</h4>
                    <button>Проверить шансы (шансов нет)</button>
                </div>
                <div className="univerPage__exam__inform">
                    <h4>О вузе:</h4>
                    <p>Национальный рейтинг: {univer.national_rank}</p>
                    <p>Качество образования: {univer.quality_of_education}</p>
                    <p>Общая оценка: {univer.score}</p>
                    <button>Буду поступать</button>
                </div>
            </div>
        </div>
    );
};

export default UniverPage;
