"use client";
import useGetUsersData from "@/hooks/useGetUsersData";
import { Stack, Text } from "@chakra-ui/react";
import DashboardTable from "./dashboard-table";

export default function Users() {
  const { data, isLoading } = useGetUsersData();

  return (
    <Stack>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        Users Data
      </Text>

      {data && !isLoading ? (
        <DashboardTable data={data} />
      ) : (
        <Text>Loading...</Text>
      )}
    </Stack>
  );
}
