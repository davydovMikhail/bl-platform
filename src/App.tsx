import { useState, useEffect } from "react";
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
import Titinfo from './components/titinfo';
import Bank from './components/bank';
import Speed from './components/speed';
import markDark from '../src/img/markDark.svg'
import markLight from '../src/img/markLight.svg'
import bankPic from '../src/img/bankPic.svg'
import speedPic from '../src/img/speedPic.svg'
import useSetInterval from "use-set-interval";
import { useGetRewardAmount } from "./hooks/useGetRewardAmount";
import { useGetReferral } from "./hooks/useGetReferral";
import { useGetBalance } from "./hooks/useGetBalance";
import { useGetMandatoryBalance } from "./hooks/useGetMandatoryBalance";
import { useClaim } from "./hooks/useClaim";
import { useGetAllowance } from "./hooks/useGetAllowance";
import { useApproveToGame } from "./hooks/useApproveToGame";
import { useGetBankLevel } from "./hooks/useGetBankLevel";
import { useBoostEnergy } from "./hooks/useBoostEnergy";
import { useGetRechargingLevel } from "./hooks/useGetRechargingLevel";
import { useBoostRecharging } from "./hooks/useBoostRecharging";
import copy from 'copy-to-clipboard';

 

function App() {
  const { night, rechargingLevel, bankLevel, balance, mustHave, loader } = useTypedSelector(state => state.main);
  const { SetLoader, SetBalance, SetMusthave, SetBankLevel, SetRechargingLevel } = useActions();
  const { account } = useEthers();

  const [reward, setReward] = useState(0);
  const [referral, setReferral] = useState("");
  const [factReferral, setFactReferral] = useState("0x0000000000000000000000000000000000000000");

  const rewardHook = useGetRewardAmount();
  const referralHook = useGetReferral();
  const getBalanceHook = useGetBalance();
  const mandatoryHook = useGetMandatoryBalance();
  const claimRewardHook = useClaim();
  const allowanceHook = useGetAllowance();
  const approveHook = useApproveToGame();
  const bankHook = useGetBankLevel();
  const boostBankHook = useBoostEnergy();
  const rechargingHook = useGetRechargingLevel();
  const boostRechargingHook = useBoostRecharging();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const ref = queryParameters.get("ref");  
    if(ref) {
      setReferral(ref);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        const refer = await referralHook(account as string);
        if(account) {
          setFactReferral(refer);
        }
        const rewardAmount = await rewardHook(account as string);
        if(account) {
          setReward(rewardAmount as number);
        }
    }
    fetchData().catch(console.error);
  }, [account]);

  function rechargingSpeed() {
    return account ? (rechargingLevel + 1) : 1;
  }

  function bankSize() {
    return account ? (bankLevel * 5000 + 10000) : 10000; 
  }

  function getWidth() {
    const ratio = (reward / bankSize()) * 100; 
    return ratio < 5 ? 5 : ratio;
  }

  useSetInterval(() => {
    if(reward + rechargingSpeed() < bankSize()) {
        setReward(reward + rechargingSpeed())
    }
  }, 1000)

  function isValidETHAddress(address: string) {
    if(address.length !== 42) {
        return false;
    }
    let regex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);
    return regex.test(address); 
  }

  function boostPrice(level: number) {
    let price = 1000 * (2**(level + 1));
    return price;
  }

  async function takeaway() {
    if (!account) {
        toast.info('First connect your wallet', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    if (balance < mustHave) {
        toast.info('The balance is less than the must have', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    SetLoader(true);
    let address = referral.trim();
    if(address === '') {
        address = "0x0000000000000000000000000000000000000000"
    } else {
        const valid = isValidETHAddress(address);
        if(!valid) {
            toast.error('Invalid address', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
            });
            SetLoader(false);
            return;
        } else {
            if(address.toLocaleUpperCase() === account.toLocaleUpperCase()) {
                toast.info('You cannot specify your address as a referral', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "dark",
                });
                SetLoader(false);
                return;
            }
        }
    }
    console.log(address);
    await claimRewardHook(address);
    SetLoader(false);
    const balanceAccount = await getBalanceHook(account as string);               
    SetBalance(balanceAccount as number);
    const mandatoryBal = await mandatoryHook(account as string);
    SetMusthave(mandatoryBal as number);
    const rewardAmount = await rewardHook(account as string);
    setReward(rewardAmount as number);
    const refer = await referralHook(account as string);
    setFactReferral(refer);
  }

  function copyRef() {
    if (!account) {
      toast.info('First connect your wallet', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
      });
      return;
    }
    copy(`https://platform.coinbubble.xyz?ref=${account}`);
    toast.success('copied', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
  });
  }

  async function boostBank() {
    if (!account) {
        toast.info('First connect your wallet', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    if (balance < boostPrice(bankLevel)) {
        toast.info('Not enough tokens', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    SetLoader(true);
    if((await allowanceHook(account) as number) < boostPrice(bankLevel)) {
        toast.info('Approve tokens', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        await approveHook();
    }
    await boostBankHook();
    SetLoader(false);
    const balanceAccount = await getBalanceHook(account as string);   
    SetBalance(balanceAccount as number);
    const bankLvl = await bankHook(account as string);
    SetBankLevel(bankLvl as number);
    const rewardAmount = await rewardHook(account as string);
    setReward(rewardAmount as number);
  }

  async function boostRecharging() {
    if (!account) {
        toast.info('First connect your wallet', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    if (balance < boostPrice(rechargingLevel)) {
        toast.info('Not enough tokens', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }
    SetLoader(true);
    if((await allowanceHook(account) as number) < boostPrice(rechargingLevel)) {
        toast.info('Approve tokens', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
        await approveHook();
    }
    await boostRechargingHook();
    SetLoader(false);
    const balanceAccount = await getBalanceHook(account as string);   
    SetBalance(balanceAccount as number);
    const rechargingLvl = await rechargingHook(account as string);
    SetRechargingLevel(rechargingLvl as number);
    const rewardAmount = await rewardHook(account as string);
    setReward(rewardAmount as number);
  }
  
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
                <span className={`${ night ? "banksize__total_dark" : "banksize__total_light" }`}> {reward} / </span><span className="banksize__total">{bankSize()}</span> 
              </div>
              <div className={`line ${ night ? "line_dark" : "line_light" }`}>
                <div className="line__inner"
                  style={{width: `${getWidth()}%`}}
                ></div>
              </div>
              <button 
                className="claim"
                onClick={() => takeaway()}
                disabled={loader}
              >
                Claim
              </button>
              <div className="title">
                <div className={`title__circle ${ night ? "title__circle_dark" : "title__circle_light" }`}>
                  <img src={night ? markDark : markLight} alt="mark" />
                </div>
                <div className={`title__text ${ night ? "title__text_dark" : "title__text_light" }`}>
                  Referral Address{factReferral === "0x0000000000000000000000000000000000000000" ? " (Optional)" : ""}:
                </div>
              </div>


              { factReferral === "0x0000000000000000000000000000000000000000" &&
                <input 
                  type="text" 
                  className={`referral__input ${ night ? "referral__input_dark" : "referral__input_light" }`} 
                  placeholder='Referral Address'  
                  value={referral || ''}
                  onChange={(e) => setReferral(e.target.value)}
                />
              }
              { factReferral !== "0x0000000000000000000000000000000000000000" &&
                <div className={`referral__div ${ night ? "referral__div_dark" : "referral__div_light" }`}>
                  <span className={`referral__text ${ night ? "referral__text_dark" : "referral__text_light" }`}>
                    {factReferral}
                  </span>
                </div>
              }
              
              <Tit />
              <Titinfo />
              <button 
                className={`ref ${ night ? "ref_dark" : "ref_light" }`}
                onClick={() => copyRef()}
              >
                Copy My Ref Link
              </button>
            </div>
            <Bubble />
          </div>
        </div>

        <div className={`stats-wrapper ${ night ? "stats-wrapper_dark" : "stats-wrapper_light" }`}>
          <div className="stats">
            <div className="stat">
              <img className="stat__pic" src={bankPic} alt="" />  
              <div className="info">
                <Bank />
                <div className={`boost ${ night ? "boost_dark" : "boost_light" }`}>
                  <button 
                    className="boost__button"
                    disabled={loader}
                    onClick={() => boostBank()}
                  >
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
                
                <Speed />

                <div className={`boost ${ night ? "boost_dark" : "boost_light" }`}>
                  <button 
                    className="boost__button"
                    disabled={loader}
                    onClick={() => boostRecharging()}
                  >
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
