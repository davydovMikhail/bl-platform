import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';
import logo from '../img/logo.png'
import xDark from "../img/xDark.svg"
import xLight from "../img/xLight.svg"
import tgDark from "../img/tgDark.svg"
import tgLight from "../img/tgLight.svg"

const Footer = () => {
    const { night } = useTypedSelector(state => state.main);

    return (
        <div className={`footer ${ night ? "header__dark" : "header__light" }`}>
          <div className="footer__left">
            <img className="header__logo" src={logo} />
            <div className={`logo__text ${ night ? "logo__text_dark" : "logo__text_light" }`}>Bubble Coin</div>
          </div>
          <div className="footer__right">
            <a className={`whitepaper1 ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="http://google.com">
              Whitepaper
            </a>
            <a className={`circle__link1 ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="http://google.com">
              <img src={night ? tgDark : tgLight} alt="" />
            </a>
            <a className={`circle__link1 ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="http://google.com">
              <img src={night ? xDark : xLight} alt="" />
            </a>
          </div>
        </div>
    );
  };
  
export default Footer;