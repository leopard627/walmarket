import { useCurrentAccount, useSuiClientQuery } from '@mysten/dapp-kit';

const USDT_TYPE = process.env.NEXT_PUBLIC_USDT_TYPE ||
  '0x6e930c6b39d8a77e4e755148564207a801d0a2f550ec306fee7b9b913ed6f17d::usdt::USDT';

export function useUSDTBalance() {
  const account = useCurrentAccount();

  const { data, isLoading, error, refetch } = useSuiClientQuery(
    'getBalance',
    {
      owner: account?.address || '',
      coinType: USDT_TYPE,
    },
    {
      enabled: !!account?.address,
      refetchInterval: 5000, // Refetch every 5 seconds
    }
  );

  // Convert balance from smallest unit (6 decimals) to USDT
  const balance = data?.totalBalance ? Number(data.totalBalance) / 1_000_000 : 0;

  return {
    balance,
    rawBalance: data?.totalBalance || '0',
    isLoading,
    error,
    refetch,
  };
}
