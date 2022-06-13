import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true} : ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Simone Lopes</Text>
        <Text color="gray.300" fontSize="small">
          sisilopes20@gmail.com
        </Text>
      </Box>
      )}
      <Avatar
        size="md"
        name="Simone Lopes"
        src="https://github.com/simonelopess.png"
      />
    </Flex>
  );
}
