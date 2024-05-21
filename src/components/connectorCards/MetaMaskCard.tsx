import { hooks, metaMask } from '@connectors/metaMask';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export default function MetaMaskCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();
  //重点照顾对象
  const provider = useProvider();
  const ENSNames = useENSNames(provider);
  const [error, setError] = useState<Error | undefined>();
  useEffect(() => {
    //看你公司的需求 强行弹起这个钱包
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  return (
    <Card
      connector={metaMask}
      activeChainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  );
}
