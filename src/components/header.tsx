import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';
import { useActions } from '../../src/storeHooks/useActions';
import { useEthers } from "@usedapp/core";
import logo from '../img/logo.png'
import xDark from "../img/xDark.svg"
import xLight from "../img/xLight.svg"
import tgDark from "../img/tgDark.svg"
import tgLight from "../img/tgLight.svg"
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"

const Header = () => {
    const { night } = useTypedSelector(state => state.main);
    const { SetNight } = useActions();
    const { activateBrowserWallet } = useEthers();

    const themeHandler = () => {
        SetNight(!night)
    }
    
    return (
        
        <div className={`header-wrapper ${ night ? "header__dark" : "header__light" }`}>
          <div className="header__left">
            <img className="header__logo" src={logo} />
            <div className={`logo__text ${ night ? "logo__text_dark" : "logo__text_light" }`}>Bubble Coin</div>
            <a target='_blank' className={`whitepaper ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="https://bubbledocs.gitbook.io/bubble/">
              Whitepaper
            </a>
            <a target='_blank' className={`circle__link ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="https://t.me/BubbleOnEth">
              <img src={night ? tgDark : tgLight} alt="" />
            </a>
            <a target='_blank' className={`circle__link ${ night ? "whitepaper__dark" : "whitepaper__light" }`} href="https://twitter.com/BubbleOnETH">
              <img src={night ? xDark : xLight} alt="" />
            </a>
            <div onClick={() => themeHandler()} className={`theme__switch ${ night ? "theme__switch_dark" : "theme__switch_light" }`}>
              <div className={`theme__inner ${ night ? "theme__inner_dark" : "theme__inner_light" }`}>
                <img className="sunmoon" src={ night ? moon : sun} alt="" />
              </div>
            </div>
          </div>
          <div className="header__right">
            <button
              onClick={() => activateBrowserWallet()}
              className="connect">
              Connect Wallet
            </button>
          </div>
        </div>
    );
  };
  
export default Header;