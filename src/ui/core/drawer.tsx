import { TruncateAddress } from "@/util/address";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { GiPowerButton } from "react-icons/gi";
import { SlideInText } from "../components/slide-in-text";
import { useDisconnect } from "wagmi";

interface ModalSelect extends DrawerProps {
  children: ReactNode;
  addie?: string;
}

export const SelectDrawer: FC<ModalSelect> = ({ children, ...rest }) => {
  return (
    <>
      <Drawer placement="right" {...rest}>
        <DrawerContent>
          <DrawerHeader>Connect a wallet</DrawerHeader>

          <DrawerBody>
            <Box>{children}</Box>
          </DrawerBody>

          <DrawerFooter>
            <Text fontSize="14px">
              By connecting a wallet, you agree to Gaugecash{"'"}s{" "}
              <span>Terms of Service</span> and consent to its{" "}
              <span>Privacy Policy</span>.
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const AccountDrawer: FC<ModalSelect> = ({
  children,
  addie,
  ...rest
}) => {
  const { disconnect } = useDisconnect();

  return (
    <Drawer placement="right" {...rest}>
      <DrawerContent>
        <DrawerHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" gap="8px">
              <Box>
                <Avatar
                  background="linear-gradient(to left, #7928CA, #FF0080)"
                  size="sm"
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Box>
              <Box fontWeight="thin" w="fit-content">
                <Text fontSize="16px">
                  {addie && TruncateAddress(4, addie)}
                </Text>
              </Box>
            </Flex>
            <Box
              as={Button}
              onClick={() => disconnect()}
              variant="ghost"
              w="fit-content"
              position="relative"
              padding="3px 7px"
            >
              <GiPowerButton size="1.2rem" />
              <SlideInText>
                <Text fontSize="12px" ml={2}>
                  Disconnect
                </Text>
              </SlideInText>
            </Box>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <Box>{children}</Box>
        </DrawerBody>

        <DrawerFooter>
          <Text fontSize="14px">
            By connecting a wallet, you agree to Gaugecash{"'"}s{" "}
            <span>Terms of Service</span> and consent to its{" "}
            <span>Privacy Policy</span>.
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const SwitchChainDrawer: FC<ModalSelect> = ({ children, ...rest }) => {
  return (
    <Drawer placement="right" {...rest}>
      <DrawerContent>
        <Flex justifyContent="center" m="auto">
          {children}
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
