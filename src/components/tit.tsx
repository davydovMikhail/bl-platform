import { useTypedSelector } from '../../src/storeHooks/useTypedSelector';

const Tit = () => {
    const { night } = useTypedSelector(state => state.main);
    
    return (
        <div className="titinfo">
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                Your Holdings  
            </div>
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                Min requirement
            </div>
            <div className={`titinfo__item ${ night ? "titinfo__item_dark" : "titinfo__item_light" }`}>
                Address
            </div>
        </div>
    );
  };
  
export default Tit;