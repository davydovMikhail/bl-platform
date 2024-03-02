import { useEthers } from "@usedapp/core";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { useTypedSelector } from './storeHooks/useTypedSelector';
import { useActions } from './storeHooks/useActions';
import Header from './components/header';
import Footer from './components/footer';
import Bubble from './components/bubble';
import Tit from './components/tit';
import markDark from '../src/img/markDark.svg'
import markLight from '../src/img/markLight.svg'
import bankPic from '../src/img/bankPic.svg'
import speedPic from '../src/img/speedPic.svg'
import okDark from '../src/img/okDark.svg'
import okLight from '../src/img/okLight.svg'

 

function App() {
  const { night } = useTypedSelector(state => state.main);
  const { } = useActions();
  const { activateBrowserWallet, account } = useEthers();
  
  return (
    <>
      <main>
        <Header />
        <div className={`bubble-wrapper ${ night ? "bubble-wrapper_dark" : "bubble-wrapper_light" }`}>
          <div className="bubble">
            <div className="bubble__left">
              <div className={`bubble__takeaway ${ night ? "bubble__takeaway_dark" : "bubble__takeaway_light" }`}>
                YOU CAN TAKE AWAY
              </div>
              <div className="bubble__banksize">
                <span className={`${ night ? "banksize__total_dark" : "banksize__total_light" }`}>3000 / </span><span className="banksize__total">15000</span> 
              </div>
              <div className={`line ${ night ? "line_dark" : "line_light" }`}>
                <div className="line__inner"
                  style={{width: "50%"}}
                ></div>
              </div>
              <button className="claim">
                Claim
              </button>
              <div className="title">
                <div className={`title__circle ${ night ? "title__circle_dark" : "title__circle_light" }`}>
                  <img src={night ? markDark : markLight} alt="mark" />
                </div>
                <div className={`title__text ${ night ? "title__text_dark" : "title__text_light" }`}>
                  Referral Address (Optional):
                </div>
              </div>
              <input 
                type="text" 
                className={`referral__input ${ night ? "referral__input_dark" : "referral__input_light" }`} 
                placeholder='Referral Address'  
              />
              <Tit />
              <div className="titinfo">
                <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                  <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    108000 $BUBBLE
                  </span>
                </div>
                <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                  <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    120000 $BUBBLE
                  </span>
                </div>
                <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                  <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    0x12...3a5f
                  </span>
                </div>
              </div>
            </div>

            <Bubble />
          </div>
        </div>

        <div className={`stats-wrapper ${ night ? "stats-wrapper_dark" : "stats-wrapper_light" }`}>
          <div className="stats">
            <div className="stat">
              <img className="stat__pic" src={bankPic} alt="" />  
              <div className="info">
                <div className={`info__title ${ night ? "info__title_dark" : "info__title_light" }`}>
                  Bank Stats
                </div>
                <div className="stat__line">
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Level
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Boost Price
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Bank Size
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <img className="stat__ok" src={night ? okDark : okLight} alt="ok" />
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      1
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      2
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      2
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className={`boost ${ night ? "boost_dark" : "boost_light" }`}>
                  <button className="boost__button">
                    Boost!
                  </button>
                  <div className={`boost__text ${ night ? "boost__text_dark" : "boost__text_light" }`}>
                    +5000 to bank size
                  </div>
                </div>
              </div>
            </div>
            <div className="stat">
              <img className="stat__pic" src={speedPic} alt="" />
              <div className="info">
                <div className={`info__title ${ night ? "info__title_dark" : "info__title_light" }`}>
                  Recovery speed
                </div>
                <div className="stat__line">
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Level
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Boost Price
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`tit__text ${ night ? "tit__text_dark" : "tit__text_light" }`}>
                      Rec. Speed
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <img className="stat__ok" src={night ? okDark : okLight} alt="ok" />
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      1
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      2
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      2
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                      10000
                    </span>
                  </div>
                </div>
                <div className={`boost ${ night ? "boost_dark" : "boost_light" }`}>
                  <button className="boost__button">
                    Boost!
                  </button>
                  <div className={`boost__text ${ night ? "boost__text_dark" : "boost__text_light" }`}>
                    +1 token per second
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <Footer />
      </main>
      <ToastContainer/>
    </>
    
  );
}

export default App;
