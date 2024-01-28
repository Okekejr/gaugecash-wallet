import {
  Avatar,
  Box,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { ConnectButton } from "./buttons";
import {
  StackItemContainer,
  WalletConatiner,
  WalletInput,
} from "../components/pageContainer";
import { ArrowDown } from "./arrow-down";
import { WalletSelector } from "../components/wallet-selector";
import { useMounted } from "@/hooks/useMounted";
import { ModalPopup } from "./modal-popup";
import { useAcctBalance } from "@/hooks/useAcc";
import { useBuyToken } from "@/hooks/useBuyToken";
import type { BaseError } from "wagmi";

export const Wallet: FC = () => {
  const {
    balance,
    GAUI,
    isConnected,
    formatedBalance,
    gauiBalance,
    maticBalanceNumber,
  } = useAcctBalance();

  const { hasMounted } = useMounted();
  const toast = useToast();

  const {
    maxBtnHandler,
    maticForm,
    handleMaticChange,
    finalMatic,
    gauForm,
    gauFormPrice,
    setFinalMatic,
    maticprice,
    buyGaui,
    hash,
    isConfirmed,
    pending,
    isConfirming,
    error,
  } = useBuyToken();

  useEffect(() => {
    gauFormPrice();
  }, [finalMatic]);

  useEffect(() => {
    // Calculate and update finalMatic whenever maticForm changes
    const finalPrice =
      maticprice && maticForm !== null ? maticprice * maticForm : 0;
    setFinalMatic(finalPrice);
  }, [maticForm, maticprice]);

  useEffect(() => {
    error &&
      toast({
        title: `Error : ${(error as BaseError).shortMessage || error.message}}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "solid",
        position: "bottom-left",
      });
  }, [error, toast]);

  return (
    <>
      <WalletConatiner>
        <form>
          <FormControl>
            <StackItemContainer>
              <WalletInput>
                <StackItemContainer>
                  <Flex justifyContent="space-between">
                    <Text textAlign="end" fontSize="12px">
                      You Pay
                    </Text>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      gap={4}
                    >
                      <Text textAlign="end" fontSize="12px">
                        Balance:{" "}
                        {balance?.data ? formatedBalance(balance.data) : ""}
                      </Text>
                      <Text
                        as="button"
                        color="red.600"
                        fontSize="12px"
                        fontWeight="bold"
                        mt="0.9px"
                        onClick={maxBtnHandler}
                      >
                        Max
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex w="100%" justifyContent="space-between">
                    <Input
                      appearance="none"
                      border="none"
                      boxShadow="none"
                      bg="transparent"
                      focusBorderColor="transparent"
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "", lg: "1.5rem" }}
                      padding="0"
                      _placeholder={{ color: "grey", fontWeight: "bold" }}
                      value={maticForm ?? ""}
                      onChange={handleMaticChange}
                    />

                    <HStack spacing="5px">
                      <Avatar
                        src="assets/img/polygon-logo.png"
                        size="xs"
                        name="Polygon_matic_logo"
                      />

                      <Text fontWeight="bold">MATIC</Text>
                    </HStack>
                  </Flex>
                  <Text
                    color="grey"
                    fontSize="0.9rem"
                    w={{ base: "11rem", lg: "20rem" }}
                  >
                    $ {finalMatic ? finalMatic.toFixed(3) : ""}
                  </Text>
                </StackItemContainer>
              </WalletInput>
              <ArrowDown />
              <WalletInput>
                <StackItemContainer>
                  <Flex justifyContent="space-between">
                    <Text textAlign="end" fontSize="12px">
                      You Pay
                    </Text>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      gap={4}
                    >
                      <Text textAlign="end" fontSize="12px">
                        Balance: {GAUI ? gauiBalance(GAUI) : ""}
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex w="100%" justifyContent="space-between">
                    <Input
                      border="none"
                      appearance="none"
                      boxShadow="none"
                      bg="transparent"
                      focusBorderColor="transparent"
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "", lg: "1.5rem" }}
                      padding="0"
                      value={gauForm ?? ""}
                      _placeholder={{ color: "grey", fontWeight: "bold" }}
                      readOnly
                    />

                    <HStack spacing="5px">
                      <Avatar
                        src="assets/img/gaugefield_logo.png"
                        size="xs"
                        name="GAUI_token_logo"
                      />

                      <Text fontWeight="bold">GAUI</Text>
                    </HStack>
                  </Flex>
                  <Box h="21.594px" />
                </StackItemContainer>
              </WalletInput>

              <>
                {hasMounted ? (
                  !isConnected ? (
                    <WalletSelector
                      title="Connect Wallet"
                      backgroundColor="rgba(31, 46, 100, 0.50)"
                      border="1px solid #273977"
                      borderRadius="10px"
                      opacity="0.8"
                      width="100%"
                      height="3.5rem"
                      _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                    />
                  ) : (
                    ""
                  )
                ) : null}
              </>

              <>
                {hasMounted ? (
                  isConnected && maticForm ? (
                    <ConnectButton
                      border="1px solid #273977"
                      borderRadius="10px"
                      opacity="1"
                      width="100%"
                      height="3.5rem"
                      isDisabled={
                        maticForm !== null &&
                        maticForm >= maticBalanceNumber(balance.data?.value)
                      }
                      title={
                        maticForm !== null &&
                        maticForm <= maticBalanceNumber(balance.data?.value)
                          ? "Buy Crowdsale"
                          : "Insufficient MATIC balance"
                      }
                      _hover={{ bgColor: "rgba(78, 56, 156, 0.48)" }}
                      onClick={buyGaui}
                    />
                  ) : (
                    isConnected && (
                      <WalletSelector
                        title={pending ? "Confirming..." : "Enter Amount"}
                        backgroundColor="rgba(31, 46, 100, 0.50)"
                        border="1px solid #273977"
                        borderRadius="10px"
                        opacity="0.8"
                        width="100%"
                        height="3.5rem"
                        isDisabled
                        _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                      />
                    )
                  )
                ) : null}
              </>

              {isConfirmed ? (
                <ModalPopup
                  hash={hash}
                  isConfirmed={isConfirmed}
                  isConfirming={isConfirming}
                  isSuccess={isConfirmed}
                />
              ) : (
                ""
              )}
            </StackItemContainer>
          </FormControl>
        </form>
      </WalletConatiner>
    </>
  );
};
