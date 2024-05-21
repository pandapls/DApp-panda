import { initializeConnector } from '@web3-react/core';
//实际metamask链接
import { MetaMask } from '@web3-react/metamask';
export const [metaMask, hooks] = initializeConnector<MetaMask>(
  actions => new MetaMask({ actions }),
);
