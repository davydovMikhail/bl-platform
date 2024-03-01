import { useEthers } from "@usedapp/core";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { useTypedSelector } from './storeHooks/useTypedSelector';
import { useActions } from './storeHooks/useActions';
 

function App() {
  const {  } = useTypedSelector(state => state.main);
  const {  } = useActions();
  const { activateBrowserWallet, account } = useEthers();
  
  return (
    <>
      <main>
        

        
      </main>
      <ToastContainer/>
    </>
    
  );
}

export default App;
