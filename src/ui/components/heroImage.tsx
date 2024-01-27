import { Image, Box } from "@chakra-ui/react";

export const HeroImage = () => {
  return (
    <Box
      width="1011px"
      height="889px"
      position="absolute"
      top={{ base: "-190px", md: "-190px", lg: "-54px" }}
      left={{ base: "-860px", md: "-787px", lg: "-527px" }}
      zIndex="1"
      maxW="initial"
    >
      <picture>
        <source srcSet="assets/mundo.webp" type="image/webp" />
        <source srcSet="assets/mundo.png" type="image/png" />
        <Image height="1000px" width="1000px" src="assets/mundo.png" alt="" />
      </picture>
    </Box>
  );
};
