"use client";
import { getUsersData } from "@/services/api";
import { IUsers } from "@/shared/types";
import { Toast } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function useGetUsersData() {
  return useQuery({
    queryKey: "usersData",
    queryFn: getUsersData,
    select: ({ data }: { data: IUsers[] }) => data,
    onError: () => {
      Toast({
        title: "Error",
        description: "There was an error fetching sales data",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    staleTime: Infinity,
  });
}
