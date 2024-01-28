import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FC, useEffect, useState } from "react";
import { ModalT } from "@/types/modal";

export const ModalPopup: FC<ModalT> = ({
  hash,
  isConfirmed,
  isConfirming,
  isSuccess,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal when isSuccess changes to true
    if (isSuccess) {
      setModalOpen(true);
    }
  }, [isSuccess]);

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>Confirmation Screen</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Stack spacing={8}>
            {hash && <Text>Transaction Hash: {hash}</Text>}
            {isConfirming && <Text>Waiting for confirmation...</Text>}
            {isConfirmed && <Text>Transaction confirmed.</Text>}

            <Box>
              <Button
                variant="solid"
                borderRadius="full"
                padding="5px 10px"
                backgroundColor="rgba(78, 56, 156, 0.48)"
                _hover={{
                  bgColor: "rgba(31, 46, 100, 0.50)",
                  textDecoration: "none",
                }}
                isExternal
                as={Link}
                href={hash && `https://mumbai.polygonscan.com/tx/${hash}`}
              >
                Click to view in Polygonscan
              </Button>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
