import { useEthers } from "@usedapp/core";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { useTypedSelector } from './storeHooks/useTypedSelector';
import { useActions } from './storeHooks/useActions';
import Header from './components/header';
import Bubble from './components/bubble';
import Tit from './components/tit';
import markDark from '../src/img/markDark.svg'
import markLight from '../src/img/markLight.svg'

 

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
        
      </main>
      <ToastContainer/>
    </>
    
  );
}

export default App;
