"use client";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { sidebarItems } from "./dashboard-layout.const";
import SidebarItem from "./sidebar-item";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  useEffect(() => {
    const sidebarStatus = localStorage.getItem("sidebarStatus") === "true";
    setIsSidebarOpen(sidebarStatus);
  }, []);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    localStorage.setItem("sidebarStatus", JSON.stringify(!isSidebarOpen));
  };

  return (
    <Stack>
      <Box
        bg="gray.100"
        borderRight="1px"
        borderColor="gray.300"
        pos="fixed"
        w={isSidebarOpen ? "50px" : "60"}
        h="full"
      >
        <Flex
          alignItems="center"
          onClick={handleToggle}
          fontSize="medium"
          fontWeight="600"
          p={4}
          cursor="pointer"
          h={12}
        >
          <AiOutlineMenu />
          <Text marginLeft={4} display={isSidebarOpen ? "none" : "block"}>
            Menu
          </Text>
        </Flex>
        <Stack>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.name} {...item} isOpen={isSidebarOpen} />
          ))}
        </Stack>
      </Box>
      <Box marginLeft={isSidebarOpen ? "50px" : "60"} p={2}>
        {children}
      </Box>
    </Stack>
  );
}

export default DashboardLayout;
