import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';

const Tit = () => {
    const { night } = useTypedSelector(state => state.main);
    
    return (
        <div className="titinfo">
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                You Have  
            </div>
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                Must Have 
            </div>
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                Address
            </div>
        </div>
    );
  };
  
export default Tit;