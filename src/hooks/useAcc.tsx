import { GAUI_TOKEN_ABI, GAUI_TOKEN_ADDRESS } from "@/config/contracts";
import { formatEther } from "viem";
import { useAccount, useBalance, useReadContract } from "wagmi";
import type { UseBalanceReturnType } from "wagmi";

export const useAcctBalance = () => {
  const { address, isConnected, chainId } = useAccount();

  const { data: GAUI } = useReadContract({
    address: GAUI_TOKEN_ADDRESS,
    abi: GAUI_TOKEN_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  const balance = useBalance({ address: address });

  const formatedBalance = (ActBalance: UseBalanceReturnType["data"]) => {
    return ActBalance
      ? parseFloat(formatEther(ActBalance.value)).toFixed(4)
      : "0.0000";
  };

  const gauiBalance = (data: bigint | unknown) => {
    return typeof data === "bigint"
      ? parseFloat(formatEther(data)).toFixed(4)
      : "0.0000";
  };

  const maticBalanceNumber = (data: bigint | undefined): number => {
    const number = typeof data === "bigint" ? parseFloat(formatEther(data)) : 0;

    return number;
  };

  return {
    address,
    balance,
    GAUI,
    isConnected,
    chainId,
    formatedBalance,
    gauiBalance,
    maticBalanceNumber,
  };
};
