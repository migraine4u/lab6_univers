import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__container__filter">
                    <div className="sidebar__container__filter__search">
                        <input
                            className="sidebar__container__filter__search-input"
                            type="text"
                            placeholder="Поиск по вузам"
                        ></input>
                    </div>
                    <p>ФИЛЬТР</p>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                    <button className="sidebar__container__filter-button">
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
