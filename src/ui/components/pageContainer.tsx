import { Container, ContainerProps, Stack, VStack } from "@chakra-ui/react";

interface Props extends ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

interface PropsStack {
  children: React.ReactNode;
}

export const PageContainer: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      maxW="container.xl"
      w="100%"
      position="relative"
      px={{ base: 6, lg: 24 }}
      pt={{ base: 6, md: 16 }}
      pb={{ sm: 8, md: 24 }}
      zIndex={10}
      {...rest}
    >
      <VStack spacing={6}>{children}</VStack>
    </Container>
  );
};

export const StackItemContainer = ({ children }: PropsStack) => {
  return <Stack spacing="5px">{children}</Stack>;
};
