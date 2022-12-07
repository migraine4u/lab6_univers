import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';
import University from '../University/Univetsity';

import './Main.scss';

const Main = ({ items }) => {
    let navigate = useNavigate();
    const [currentPage, setPage] = useState(1);
    const [univers, setUnivers] = useState([]);
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

    useEffect(() => {
        axios
            .get(
                `https://638fc2869cbdb0dbe33046ed.mockapi.io/univers?page=${currentPage}&limit=5`
            )
            .then(({ data }) => {
                setUnivers(data);
            });
    }, [currentPage]);
    return (
        <div className="main">
            <Sidebar />

            {univers.map(
                (item, index) =>
                    index < 35 && (
                        <University
                            key={index}
                            univer={item}
                            onClickItem={() => {
                                navigate(`/university/${item.world_rank}`);
                            }}
                        />
                    )
            )}
            <ul className="main__pages">
                {pageNumbers.map((number) => {
                    return (
                        <li
                            key={number}
                            id={number}
                            onClick={() => setPage(number)}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Main;

// className={classNames('main__pages__li', {
//     active: item.active
//         ? item.active
//         : activeItem && activeItem.id === item.id,
// })}
