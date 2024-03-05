import { useEffect } from 'react'; 
import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';
import { useActions } from '../../src/storeHooks/useActions';
import { useEthers } from "@usedapp/core";
import { useGetRechargingLevel } from '../hooks/useGetRechargingLevel';
import okDark from "../img/okDark.svg"
import okLight from "../img/okLight.svg"

const Speed = () => {
    const { night, rechargingLevel } = useTypedSelector(state => state.main);
    const { SetRechargingLevel } = useActions();
    const { account } = useEthers();

    const speedHook = useGetRechargingLevel();

    useEffect(() => {
        const fetchData = async () => {
            const rechargingLevel = await speedHook(account as string);
            SetRechargingLevel(rechargingLevel as number);
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

    function rechargingSpeed(level: number) {
        return (level + 1);
    }

    function level() {
        return account ? rechargingLevel : 0;
    }
    
    return (
        <>
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
                    {rechargingSpeed(level())} (coin/sec)
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {level()+1}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {boostPrice(level()+1)}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {rechargingSpeed(level()+1)} (coin/sec)
                    </span>
                  </div>
                </div>
                <div className="stat__line">
                  <div className={`stat__level_none stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {level()+2}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {boostPrice(level()+2)}
                    </span>
                  </div>
                  <div className={`stat__item ${ night ? "stat__item_dark" : "stat__item_light" }`}>
                    <span className={`item__text ${ night ? "none__dark" : "none__light" }`}>
                    {rechargingSpeed(level()+2)} (coin/sec)
                    </span>
                  </div>
                </div>
        </>

    );
  };
  
export default Speed;