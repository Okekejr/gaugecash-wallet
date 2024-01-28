import { MetamaskIcon } from "@/ui/components/icons/Metamask";
import { PageContainer } from "@/ui/components/pageContainer";
import { LivePrices } from "@/ui/core/livePrices";
import { Wallet } from "@/ui/core/wallet";
import { HStack, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <PageContainer pt={{ base: 20, md: 12 }} pb={{ base: 20, md: 12 }}>
      <HStack>
        <Heading>BUY CROWDSALE</Heading>
        <MetamaskIcon fontSize={35} />
      </HStack>
      <Wallet />
      <LivePrices />
    </PageContainer>
  );
};

export default Home;
