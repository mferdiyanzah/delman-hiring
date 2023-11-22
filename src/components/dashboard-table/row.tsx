import { Box, Stack } from "@chakra-ui/react";
import { CSSProperties } from "react";

const Row = ({
  style,
  value,
  isLastColumn,
}: {
  style: CSSProperties;
  value: any;
  isLastColumn: boolean;
}) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      paddingLeft="4"
      borderRight={isLastColumn ? "none" : "1px"}
      borderBottom="1px"
      style={style}
    >
      <Box
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        textAlign="center"
      >
        {value}
      </Box>
    </Stack>
  );
};

export default Row;
