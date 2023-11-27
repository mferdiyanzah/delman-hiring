import useDeleteUser from "@/hooks/useDeleteUser";
import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { DetailUserModalProps } from "./search.interface";

export default function DetailUserModal({
  isOpen,
  onClose,
  data,
}: DetailUserModalProps) {
  const { mutate } = useDeleteUser();

  const handleDelete = () => {
    mutate(data.id);
    onClose();
  };

  return (
    <Stack
      position="absolute"
      display={isOpen ? "flex" : "none"}
      zIndex={999}
      background="white"
      top={0}
      right={0}
      left="70%"
      height="100%"
      boxShadow="0 0 10px rgba(0,0,0,0.2)"
      flexDirection="column"
      justifyContent="space-between"
    >
      <TableContainer overflow="hidden" pr={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Id</Td>
              <Td>{data.id}</Td>
            </Tr>
            <Tr>
              <Td>Name</Td>
              <Td>{data.name}</Td>
            </Tr>
            <Tr>
              <Td>Email</Td>
              <Td>{data.email}</Td>
            </Tr>
            <Tr>
              <Td>Country Name</Td>
              <Td>{data.country_name}</Td>
            </Tr>
            <Tr>
              <Td>Bitcoin Address</Td>
              <Td>{data.bitcoin_address}</Td>
            </Tr>
            <Tr>
              <Td>Avatar</Td>
              <Td>{data.avatar}</Td>
            </Tr>
            <Tr>
              <Td>Login IP</Td>
              <Td>{data.login_ip}</Td>
            </Tr>
            <Tr>
              <Td>Active Device MAC</Td>
              <Td>{data.active_device_mac}</Td>
            </Tr>
            <Tr>
              <Td>Notes</Td>
              <Td>{data.notes}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Stack p={4}>
        <Button colorScheme="teal" onClick={onClose}>
          Close
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </Stack>
    </Stack>
    // <Modal isOpen={isOpen} onClose={onClose} isCentered>
    //   <ModalContent maxW="80%">
    //     <ModalHeader>Detail user</ModalHeader>
    //     <ModalCloseButton />
    //     <ModalBody p={4}>
    //       <TableContainer>
    //         <Table variant="simple">
    //           <Tbody>
    //             <Tr>
    //               <Td>Id</Td>
    //               <Td>{data.id}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Name</Td>
    //               <Td>{data.name}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Email</Td>
    //               <Td>{data.email}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Country Name</Td>
    //               <Td>{data.country_name}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Bitcoin Address</Td>
    //               <Td>{data.bitcoin_address}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Avatar</Td>
    //               <Td>{data.avatar}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Login IP</Td>
    //               <Td>{data.login_ip}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Active Device MAC</Td>
    //               <Td>{data.active_device_mac}</Td>
    //             </Tr>
    //             <Tr>
    //               <Td>Notes</Td>
    //               <Td>{data.notes}</Td>
    //             </Tr>
    //           </Tbody>
    //         </Table>
    //       </TableContainer>
    //     </ModalBody>
    //     <ModalFooter display="flex" justifyContent="space-between">
    // <Button colorScheme="teal" onClick={onClose}>
    //   Close
    // </Button>
    // <Button colorScheme="red" onClick={handleDelete}>
    //   Delete
    // </Button>
    //     </ModalFooter>
    //   </ModalContent>
    // </Modal>
  );
}
