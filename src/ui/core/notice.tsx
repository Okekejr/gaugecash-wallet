import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

export const NoticeBubble: FC = () => {
  return (
    <Flex
      alignItems="center"
      borderRadius="10px"
      boxShadow="0 4px 8px #6C4ED9"
      display={{ base: "none", md: "flex" }}
      flexDirection="column"
      w="fit-content"
      gap={4}
      p={2}
    >
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="600px"
      >
        <AlertIcon />
        <AlertTitle>DEMO PROJECT FOR GAUI WALLET!</AlertTitle>
        <AlertDescription>
          The wallet is built to accept both Polygon mainnet and Mumbai Testnet.
          It uses ABI and contract addresses of Gaugecash Crowdsale. To enjoy
          all features you need to be connected to polygon mainnet, but to make
          a successful transaction you should be connected to Mumbai Testnet,
          because this would use your test tokens and not real MATIC.
        </AlertDescription>
      </Alert>
    </Flex>
  );
};
