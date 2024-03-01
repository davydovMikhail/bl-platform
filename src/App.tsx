import { useEthers } from "@usedapp/core";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { useTypedSelector } from './storeHooks/useTypedSelector';
import { useActions } from './storeHooks/useActions';
import Header from './components/header';

 

function App() {
  const { night } = useTypedSelector(state => state.main);
  const { SetNight } = useActions();
  const { activateBrowserWallet, account } = useEthers();


  const themeHandler = () => {
    SetNight(!night)
  }

  
  return (
    <>
      <main>
        <Header />

        
      </main>
      <ToastContainer/>
    </>
    
  );
}

export default App;
