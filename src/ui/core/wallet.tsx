import {
  Avatar,
  Box,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { ConnectButton } from "./buttons";
import { StackItemContainer } from "../components/pageContainer";
import { useAcctBalance } from "@/hooks/useAcc";

export const Wallet: FC = () => {
  const { balance, GAUI, formatedBalance, gauiBalance } = useAcctBalance();

  return (
    <>
      <Box
        padding="8px"
        position="relative"
        zIndex={1}
        minWidth="350px"
        max-width="480px"
        border="1px solid"
        borderRadius="24px"
        w={{ md: "32rem" }}
      >
        <form>
          <FormControl>
            <StackItemContainer>
              <Box
                borderRadius="10px"
                backgroundColor="rgba(31, 46, 100, 0.50)"
                border="1px solid #273977"
                display="flex"
                flexDir="column"
                fontSize="1rem"
                opacity="0.8"
                padding={4}
                _hover={{ opacity: "1" }}
              >
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
                      >
                        Max
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex w="100%" justifyContent="space-between">
                    <Input
                      border="none"
                      appearance="none"
                      boxShadow="none"
                      bg="transparent"
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0.0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "", lg: "1.5rem" }}
                      padding="0"
                      sx={{
                        "::placeholder": {
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
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
                    $
                  </Text>
                </StackItemContainer>
              </Box>
              <Box
                borderRadius="10px"
                backgroundColor="rgba(31, 46, 100, 0.50)"
                border="1px solid #273977"
                display="flex"
                flexDir="column"
                fontSize="1rem"
                opacity="0.8"
                padding={4}
                _hover={{ opacity: "1" }}
              >
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
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0.0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "", lg: "1.5rem" }}
                      padding="0"
                      sx={{
                        "::placeholder": {
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    />

                    <HStack spacing="5px">
                      <Avatar
                        src="assets/img/gaugefield_logo.png"
                        size="xs"
                        name="Polygon_matic_logo"
                      />

                      <Text fontWeight="bold">GAUI</Text>
                    </HStack>
                  </Flex>
                  <Text
                    color="grey"
                    fontSize="0.9rem"
                    w={{ base: "11rem", lg: "20rem" }}
                  >
                    $
                  </Text>
                </StackItemContainer>
              </Box>
              <ConnectButton
                title="Connect Wallet"
                backgroundColor="rgba(31, 46, 100, 0.50)"
                border="1px solid #273977"
                borderRadius="10px"
                opacity="0.8"
                width="100%"
                height="5rem"
              />
            </StackItemContainer>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
