"use client";
import { getSalesData } from "@/services/api";
import { ISales } from "@/shared/types";
import { Toast } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function useGetSalesData() {
  return useQuery({
    queryKey: "salesData",
    queryFn: getSalesData,
    select: ({ data }: { data: ISales[] }) => data,
    onError: () => {
      Toast({
        title: "Error",
        description: "There was an error fetching sales data",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });
}
