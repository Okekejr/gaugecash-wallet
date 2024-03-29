import { useWalletSelector } from "@/hooks/useSelector";
import { TruncateAddress } from "@/util/address";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { AccountDrawer, SwitchChainDrawer } from "../core/drawer";
import { useAcctBalance } from "@/hooks/useAcc";
import { MaticFeed } from "@/config/dataFeeds/maticFeed";
import { useFetchValue } from "@/hooks/useFetchValue";
import { useAccount, useSwitchChain } from "wagmi";
import { polygon } from "viem/chains";
import { ConnectButton } from "../core/buttons";
import { IoWalletOutline } from "react-icons/io5";

export const Account: FC = () => {
  const { address, balance, GAUI, formatedBalance, gauiBalance } =
    useAcctBalance();
  const { chainId, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();
  const { handleOpen, modal, handleClose } = useWalletSelector();
  const { value: maticprice } = useFetchValue(MaticFeed);
  const toast = useToast();

  useEffect(() => {
    if (isConnected === true && chainId !== polygon.id)
      toast({
        title: "Wrong Network / Chain",
        description:
          "Click on profile button and click on switch network button ",
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "solid",
        position: "bottom-left",
      });
  }, [chainId, isConnected, toast]);

  return (
    <>
      <Button
        alignItems="center"
        borderRadius="full"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
        display="flex"
        gap="6px"
        padding="3px 7px"
        height="36px"
        onClick={handleOpen}
        w="fit-content"
        mx="10px"
        variant="ghost"
        _hover={{
          backgroundColor: "rgba(78, 56, 156, 0.48)",
        }}
      >
        <Box>
          <Avatar
            background="linear-gradient(to left, #7928CA, #FF0080)"
            width={7}
            height={7}
          />
        </Box>
        <Box w="fit-content" display={{ base: "none", md: "block" }}>
          <Text fontWeight="thin">
            {address && TruncateAddress(4, address)}
          </Text>
        </Box>
      </Button>

      {isConnected === true && chainId !== polygon.id ? (
        <SwitchChainDrawer isOpen={modal} onClose={handleClose}>
          <ConnectButton
            title="Switch Network"
            width="fit-content"
            onClick={() => switchChain({ chainId: polygon.id })}
          />
        </SwitchChainDrawer>
      ) : (
        <AccountDrawer
          isOpen={modal}
          onClose={handleClose}
          addie={address && TruncateAddress(4, address)}
        >
          <Stack spacing={12} mt={8}>
            <HStack>
              <Heading fontSize="23px">Your Portfolio</Heading>
              <IoWalletOutline size="1.2rem" />
            </HStack>
            <Flex w="fit-content">
              <Stat>
                <StatLabel>Current GAUI balance</StatLabel>
                <StatNumber>{GAUI ? gauiBalance(GAUI) : "0.000"}</StatNumber>
              </Stat>
            </Flex>

            <Stat w="fit-content">
              <StatNumber fontSize="30px">
                {balance?.data && formatedBalance(balance.data)} MATIC
              </StatNumber>
              <StatHelpText fontSize="16px">
                $
                {Number(
                  maticprice && balance?.data !== null
                    ? maticprice * parseFloat(formatedBalance(balance.data))
                    : 0.0
                ).toFixed(2)}{" "}
                {""}
                USD
              </StatHelpText>
            </Stat>

            <Text
              textShadow="-7px -5px #ffffff"
              bgGradient="linear(to-l, #7143D6, #003DE9, #501681)"
              bgClip="text"
            >
              Join us in our Second Crowdsale !
            </Text>
          </Stack>
        </AccountDrawer>
      )}
    </>
  );
};
