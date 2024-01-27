import { FC } from "react";
import {
  Flex,
  FlexProps,
  Heading,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { routes } from "@/util/routes";
import { IRouteGroup } from "@/util/routes/IRoute";
import { fonts } from "@/theme/Fonts";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const MobileNavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      {routes.map((routeGroup: IRouteGroup) => {
        return (
          <Flex
            key={routeGroup.title}
            flexDirection="column"
            alignItems="flex-end"
            mb={10}
          >
            <Heading
              fontSize="xs"
              mb={4}
              fontWeight="400"
              fontFamily={fonts.body}
              color="neutral.400"
            >
              {routeGroup.title}
            </Heading>
            <List display="flex" flexDirection="column" alignItems="flex-end">
              {routeGroup.routes.map((route) => {
                return (
                  <ListItem key={route.title} mb={3}>
                    <Link
                      href={route.url}
                      isExternal={route.isExternal}
                      color="neutral.300"
                      fontFamily={fonts.heading}
                      fontWeight="600"
                      _active={{ bg: "transparent" }}
                      fontSize="button"
                      onClick={onClose}
                    >
                      {route.title}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        );
      })}
    </Flex>
  );
};
