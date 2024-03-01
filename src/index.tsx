import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Config, Mainnet, DAppProvider, BSCTestnet } from "@usedapp/core";
import { config } from './config';
import { Provider } from 'react-redux';
import { store } from './store';

const DAppConfig: Config = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSCTestnet.chainId]: config.network.BSCTestnet.url,
    [Mainnet.chainId]: config.network.mainnet.url,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={DAppConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </DAppProvider>
);

