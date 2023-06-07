import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

interface UserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props;

  return (
    <Menu>
      <MenuButton>
        <HStack spacing='3' ps='2'>
          <Avatar name={name} src={image} boxSize='10' />
          <Box>
            <Text fontWeight='medium' fontSize='sm'>
              {name}
            </Text>
            <Text color='muted' fontSize='sm'>
              {email}
            </Text>
          </Box>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} href='/logout' prefetch={false}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
