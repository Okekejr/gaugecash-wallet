import { useMounted } from "@/hooks/useMounted";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Feed } from "../components/feed";
import { GauW } from "../components/icons/GauW";
import { PolygonW } from "../components/icons/PolygonW";
import { TetherW } from "../components/icons/TetherW";
import { GauFeed } from "@/config/dataFeeds/gauFeed";
import { MaticFeed } from "@/config/dataFeeds/maticFeed";
import { UsdtFeed } from "@/config/dataFeeds/usdtFeed";

export const LivePrices: FC = () => {
  const { hasMounted } = useMounted();

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
      {hasMounted ? (
        <Flex gap={12}>
          <Feed name="GAUI" icon={<GauW />} func={GauFeed} />
          <Feed name="MATIC" icon={<PolygonW />} func={MaticFeed} />
          <Feed name="USDT" icon={<TetherW />} func={UsdtFeed} />
        </Flex>
      ) : (
        "loading..."
      )}
    </Flex>
  );
};
