import { Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { StickyHeaderProps } from "./dashboard-table.interface";

const StickyHeader: FC<StickyHeaderProps> = ({ columns }) => (
  <div className="sticky-grid__header">
    <div className="sticky-grid__header__scrollable">
      {columns.map(({ label, ...style }, i) => (
        <Stack
          key={i}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px"
          style={style}
          background="gray.100"
        >
          <Text>{label}</Text>
        </Stack>
      ))}
    </div>
  </div>
);

export default StickyHeader;
