import { Flex } from "components/Layout";
import Text from "components/Text";

import { Avatar } from "@mui/material";

export default function UserInfo({ user, className }) {
  return (
    <Flex alignItems="center" gap="10px" className={className}>
      <Avatar
        sx={{ width: 60, height: 60 }}
        src={user?.profilePicture}
        alt="profile"
      />
      <Flex flexDirection="column">
        <Text color="secondary" fontWeight="bold">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text color="secondary">{user?.position} </Text>
      </Flex>
    </Flex>
  );
}
