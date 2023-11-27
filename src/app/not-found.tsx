import { Stack, Text } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      width="100%"
      minHeight="90vh"
      alignItems="center"
    >
      <Text fontSize="xx-large" fontWeight="600">
        404 Not Found
      </Text>
    </Stack>
  );
}
