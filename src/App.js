import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import UniverPage from './components/UniverPage/UniverPage';
// import Professions from './components/Professions/Professions';

function App() {
    let navigate = useNavigate();
    let location = useLocation();

    const [open, setOpen] = useState(false);
    const [help, setHelp] = useState(false);
    const [univers, setUnivers] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/univers').then(({ data }) => {
            setUnivers(data);
        });
    }, []);

    useEffect(() => {
        const univerId = location.pathname.split('university/')[1];
        if (univers) {
            const univer = univers.find(
                (univer) => univer.world_rank === Number(univerId)
            );
            setActiveItem(univer);
        }
    }, [univers, location.pathname]);

    return (
        <div className="wrapper">
            <Header open={open} setOpen={setOpen} navigate={navigate} />
            <Routes>
                <Route path="/" element={<Main items={univers} />} />
                <Route path="/account/*" element={<Cabinet />} />
                {/* <Route path="/account/profs" element={<Professions />} /> */}
                <Route
                    path="/university/:id"
                    element={
                        univers &&
                        activeItem && <UniverPage univer={activeItem} />
                    }
                />
            </Routes>
            <Login open={open} setOpen={setOpen} />
            <Footer help={help} setHelp={setHelp} />
        </div>
    );
}

export default App;
