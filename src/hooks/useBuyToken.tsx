import { useState } from "react";
import { useAcctBalance } from "./useAcc";
import { useFetchValue } from "./useFetchValue";
import { MaticFeed } from "@/config/dataFeeds/maticFeed";
import { parseEther } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import {
  CROWDSALE_TOKEN_ABI,
  CROWDSALE_TOKEN_ADDRESS,
} from "@/config/contracts";
import { polygonMumbai } from "viem/chains";

export const useBuyToken = () => {
  const { address, balance, formatedBalance } = useAcctBalance();

  // matic price feed
  const { value: maticprice } = useFetchValue(MaticFeed);

  // matic form
  const [maticForm, setMaticForm] = useState<number | null>(null);
  const [finalMatic, setFinalMatic] = useState<number | null>(null);

  // gau form
  const [gauForm, setGauForm] = useState<number | null>(null);

  const {
    data: hash,
    isPending: pending,
    error,
    writeContract,
  } = useWriteContract();

  // handle MATIC form change, calculate price and update state
  const handleMaticChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formPrice = parseFloat(event.target.value);
    setMaticForm(formPrice);

    const finalPrice =
      maticprice && formPrice !== null ? maticprice * formPrice : null;
    setFinalMatic(finalPrice);

    gauFormPrice();
  };

  // handle max button function
  const maxBtnHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (balance?.data) {
      const maxPrice = parseFloat(formatedBalance(balance.data));
      setMaticForm(maxPrice);
    }
  };

  // calculate gauform price based on matic form
  const gauFormPrice = () => {
    if (finalMatic && finalMatic !== 0) {
      // Add a check to prevent division by zero
      setGauForm(finalMatic / 0.25);
    } else {
      setGauForm(null); // Set to 0 or handle accordingly if gauBalanceValue is 0
    }
  };

  // buy GAUI function, call method from ABI and clear state of MATIC form
  const buyGaui = (event: React.FormEvent) => {
    event?.preventDefault();

    const amount = parseEther(maticForm?.toString() ?? "");

    writeContract({
      address: CROWDSALE_TOKEN_ADDRESS,
      abi: CROWDSALE_TOKEN_ABI,
      functionName: "buyTokens",
      args: [address],
      value: amount,
      chainId: polygonMumbai.id,
    });

    setMaticForm(null);
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    maxBtnHandler,
    maticForm,
    handleMaticChange,
    finalMatic,
    gauForm,
    buyGaui,
    pending,
    gauFormPrice,
    setFinalMatic,
    maticprice,
    hash,
    isConfirmed,
    isConfirming,
    error,
  };
};
