import { deleteUser } from "@/services/api";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";

export default function useDeleteUser() {
  const toast = useToast();
  return useMutation({
    mutationKey: "deleteUser",
    mutationFn: deleteUser,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User deleted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error deleting user",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    },
  });
}
