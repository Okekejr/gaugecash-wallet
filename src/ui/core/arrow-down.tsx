import { BoxProps, HStack } from "@chakra-ui/layout";
import { FC } from "react";
import { IoArrowDownOutline } from "react-icons/io5";

export const ArrowDown: FC<BoxProps> = ({ ...rest }) => {
  return (
    <>
      <HStack
        justifyContent="center"
        border="4px solid #02041C"
        borderRadius="12px"
        m="-22px auto"
        backgroundColor="rgba(35, 46, 100, 1.90)"
        h="40px"
        opacity="0.9"
        w="40px"
        position="relative"
        zIndex="2"
        {...rest}
      >
        <IoArrowDownOutline color="#fff" />
      </HStack>
    </>
  );
};
