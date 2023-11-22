"use client";
import DashboardTable from "@/components/dashboard-table";
import useGetSalesData from "@/hooks/useGetSalesData";
import { Stack, Text } from "@chakra-ui/react";

export default function Home() {
  const { data, isLoading } = useGetSalesData();

  return (
    <Stack>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        Sales Dashboard
      </Text>

      {data && !isLoading ? (
        <DashboardTable data={data} />
      ) : (
        <Text>Loading...</Text>
      )}
    </Stack>
  );
}
