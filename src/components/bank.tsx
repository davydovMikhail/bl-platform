import { useEffect } from 'react';
import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';
import { useActions } from '../../src/storeHooks/useActions';
import { useEthers } from "@usedapp/core";
import okDark from "../img/okDark.svg"
import okLight from "../img/okLight.svg"
import { useGetBankLevel } from '../hooks/useGetBankLevel';


const Bank = () => {
    const { night, bankLevel } = useTypedSelector(state => state.main);
    const { SetBankLevel } = useActions();
    const { account } = useEthers();

    const bankHook = useGetBankLevel();

    useEffect(() => {
        const fetchData = async () => {
            const bankLevel = await bankHook(account as string);
            SetBankLevel(bankLevel as number);
        }
        fetchData().catch(console.error);
    }, [account]);

    function boostPrice(level: number) {
        if(level === 0) {
            return 0
        }
        let price = 1000 * (2**(level));
        return price;
    }

    function bankSize(level: number) {
        return (level * 5000 + 10000);
    }

    function level() {
        return account ? bankLevel : 0;
    }

    return (
        <>
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
                      {level()}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      {boostPrice(level())}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "active__dark" : "active__light" }`}>
                      {bankSize(level())}
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                        {level() + 1}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                        {boostPrice(level()+1)}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                        {bankSize(level()+1)}
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                        {level() + 2}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {boostPrice(level()+2)}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                        {bankSize(level()+2)}
                    </span>
                  </div>
                </div>
        </>

    );
  };
  
export default Bank;