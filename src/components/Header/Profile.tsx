import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            matheusferr2015@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Ferreira"
        src="https://github.com/ledoctah.png"
      />
    </Flex>
  );
}
