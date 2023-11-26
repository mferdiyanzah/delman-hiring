"use client";
import useGetUsersData from "@/hooks/useGetUsersData";
import { IUsers } from "@/shared/types";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DetailUserModal from "./detail-user-modal";

export default function Search() {
  const { data: userList } = useGetUsersData();
  const [selectedUser, setSelectedUser] = useState<IUsers>();
  const [emailValue, setEmailValue] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (emailValue.length > 2 && userList) {
      debounceTimeout.current = setTimeout(() => {
        const filteredUser = userList.filter((user) =>
          user.email.toLowerCase().startsWith(emailValue.toLowerCase())
        );
        console.log(filteredUser[0]);
        setSelectedUser(filteredUser[0]);
      }, 300);
    } else {
      setSelectedUser(undefined);
    }

    return () => {
      if (debounceTimeout.current != null) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [emailValue]);

  return (
    <Stack>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        Search User
      </Text>
      <Stack w={80} p={4}>
        <FormLabel m="0">Email</FormLabel>
        <Input name="email" onChange={(e) => setEmailValue(e.target.value)} />
        <span>Enter minimum 3 character</span>
      </Stack>
      <Stack
        m={4}
        px={4}
        py={6}
        w={80}
        border="1px solid gray"
        borderRadius="1em"
        display="flex"
        justify="center"
        alignItems="center"
      >
        <Box display="flex" justifyContent="center">
          {emailValue.length < 3 ? (
            <p>Please enter an email</p>
          ) : !selectedUser?.email ? (
            <p>User not found</p>
          ) : (
            <Box textAlign="center">
              <Text fontSize="large" fontWeight="bold" mb={2}>
                {selectedUser?.email}
              </Text>
              <Button onClick={onOpen}>View</Button>
            </Box>
          )}
        </Box>
      </Stack>
      {selectedUser && (
        <DetailUserModal
          data={selectedUser}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Stack>
  );
}
