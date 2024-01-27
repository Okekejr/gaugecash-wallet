import { useFetchValue } from "@/hooks/useFetchValue";
import { HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  name: string;
  icon: React.ReactElement;
  func: () => Promise<number>;
}

export const Feed: FC<Props> = ({ func, icon, name }) => {
  const { value } = useFetchValue(func);

  return (
    <>
      <HStack spacing="5px">
        {icon}
        <Text fontSize="16px">
          {name} = ${value !== null ? value.toFixed(4) : "0.000"} USD
        </Text>
      </HStack>
    </>
  );
};
