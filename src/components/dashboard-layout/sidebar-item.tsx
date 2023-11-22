import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ISidebarItem } from "./dashboard-layout.interface";

function SidebarItem({ name, path, icon, isOpen }: ISidebarItem) {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link href={path}>
      <Flex
        alignItems="center"
        bg={isActive ? "gray.300" : "transparent"}
        fontSize="medium"
        fontWeight="600"
        p={4}
        h={12}
      >
        {icon}
        <Text marginLeft={4} display={isOpen ? "none" : "block"}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
}

export default SidebarItem;
