import { useEffect } from 'react';
import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';
import { useActions } from '../../src/storeHooks/useActions';
import { useEthers } from "@usedapp/core";
import { useGetBalance } from '../hooks/useGetBalance';
import { useGetMandatoryBalance } from '../hooks/useGetMandatoryBalance'; 


const Titinfo = () => {
    const { night, balance, mustHave } = useTypedSelector(state => state.main);
    const { SetBalance, SetMusthave } = useActions();
    const { account } = useEthers();

    const getBalanceHook = useGetBalance();
    const mandatoryHook = useGetMandatoryBalance();

    useEffect(() => {
        const fetchData = async () => {
            const balanceAccount = await getBalanceHook(account as string);   
            SetBalance(balanceAccount as number);
            const mandatoryBal = await mandatoryHook(account as string);
            SetMusthave(mandatoryBal as number);
        }
        fetchData().catch(console.error);
    }, [account]);

    return (
        <div className="titinfo">
            <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    {account ? balance : 0 } $BUBBLE
                </span>
            </div>
            <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    {account ? mustHave : 100000 } $BUBBLE
                </span>
            </div>
            <div className={`titinfo__bal ${ night ? "titinfo__bal_dark" : "titinfo__bal_light" }`}>
                <span className={`titinfo__baltext ${ night ? "titinfo__baltext_dark" : "titinfo__baltext_light" }`}>
                    {account ? `${account.slice(0, 5)}...${account.slice(-3)}` : "Not Connected"} 
                </span>
            </div>
        </div>
        
    );
  };
  
export default Titinfo;