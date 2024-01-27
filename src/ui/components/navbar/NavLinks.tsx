import { FC } from "react";
import {
  Button,
  Flex,
  FlexProps,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { homeLink } from "@/util/routes/homeLink";
import { IRouteGroup } from "@/util/routes/IRoute";
import { fonts } from "@/theme/Fonts";
import { ChevronUp } from "../icons/ChevronUp";
import { routes } from "@/util/routes";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const NavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      border="1px solid rgba(31, 46, 100, 0.50)"
      {...rest}
    >
      <Link
        _hover={{ textDecoration: "none", bg: "rgba(31, 46, 100, 0.50)" }}
        href={homeLink.routes[0].url}
        fontWeight="600"
        isExternal={homeLink.routes[0].isExternal}
        mr={{ lg: 4 }}
      >
        {homeLink.routes[0].title}
      </Link>
      {routes.map((routeGroup: IRouteGroup) => {
        return (
          <Menu key={routeGroup.title} autoSelect={false}>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  background="transparent"
                  rightIcon={
                    <ChevronUp
                      transition="all 175ms ease"
                      transform={isOpen ? "" : "scaleY(-1)"}
                    />
                  }
                  _hover={{ bg: "rgba(31, 46, 100, 0.50)" }}
                  _active={{ bg: "primary.dark" }}
                  _expanded={{ bg: "transparent" }}
                >
                  {routeGroup.title}
                </MenuButton>

                <MenuList
                  background="rgba(31, 46, 100, 0.50)"
                  borderColor="primary.dark"
                  backdropFilter="blur(16px)"
                  borderRadius="12px"
                  mt="8px"
                >
                  {routeGroup.routes.map((route) => {
                    return (
                      <MenuItem
                        as={Link}
                        href={route.url}
                        isExternal={route.isExternal}
                        color="neutral.300"
                        background="transparent"
                        key={route.title}
                        fontFamily={fonts.heading}
                        fontWeight="600"
                        fontSize="1rem"
                        w="fit-content"
                        gap="5px"
                      >
                        {route.title}
                        {route.icon}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        );
      })}
    </Flex>
  );
};
