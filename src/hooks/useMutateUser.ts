import { registerUser } from "@/services/api";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";

export default function useMutateUser() {
  const toast = useToast();
  return useMutation({
    mutationKey: "registerUser",
    mutationFn: registerUser,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User registered successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error fetching sales data",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    },
  });
}
