import { MetamaskIcon } from "@/ui/components/icons/Metamask";
import { PageContainer } from "@/ui/components/pageContainer";
import { NoticeBubble } from "@/ui/core/notice";
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
      <NoticeBubble />
    </PageContainer>
  );
};

export default Home;
