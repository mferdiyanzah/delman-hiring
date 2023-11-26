import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { DetailUserModalProps } from "./search.interface";

export default function DetailUserModal({
  isOpen,
  onClose,
  data,
}: DetailUserModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalContent>
        <ModalHeader>Detail user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{data.email}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
