import { useMounted } from "@/hooks/useMounted";
import { Circle, Flex, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";

export const Feedback = () => {
  const { isConnected } = useAccount();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <>
      <Flex
        h="fit-content"
        position="fixed"
        bottom={10}
        _hover={{ cursor: "default" }}
      >
        {isConnected === true ? (
          <Flex gap="6px" alignItems="center">
            <Text w="fit-content" fontSize="11px" fontWeight="thin">
              Connected
            </Text>
            <Circle size="8px" bg="rgb(64, 182, 107)" />
          </Flex>
        ) : (
          <Flex gap="6px" alignItems="center">
            <Text w="fit-content" fontSize="11px" fontWeight="thin">
              Disconnected
            </Text>
            <Circle size="8px" bg="red.600" />
          </Flex>
        )}
      </Flex>
    </>
  ) : null;
};
