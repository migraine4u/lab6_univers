import './Footer.scss';
import Help from '../Help/Help';
const Footer = ({ help, setHelp }) => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__contacts">
                    <p>Обратная связь:</p>
                    <div className="footer__content__contacts__numbers">
                        <p>+79XXXXXXXXX</p>
                        <p>+79XXXXXXXXY</p>
                        <p>+79XXXXXXXXZ</p>
                    </div>
                </div>
                <button
                    className="footer__content__help"
                    onClick={() => setHelp(!help)}
                >
                    <p>Нужна помощь?</p>
                </button>
                {help && <Help setHelp={setHelp} />}
            </div>
        </div>
    );
};

export default Footer;
